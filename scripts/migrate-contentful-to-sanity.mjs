/**
 * Migration script: Contentful portfolioItem → Sanity project
 *
 * Run with: node scripts/migrate-contentful-to-sanity.mjs
 */

import contentfulPkg from 'contentful'
const { createClient: createContentfulClient } = contentfulPkg

import { createClient as createSanityClient } from '@sanity/client'
import https from 'https'
import { Buffer } from 'buffer'

// ── Contentful ──────────────────────────────────────────────────────────────
const contentful = createContentfulClient({
  space: '0f5j3holhixt',
  accessToken: 'gO4oeRZ4GDzMx8D9gb76N4xfBS9spek09Ai8RZuhqWY',
})

// ── Sanity ───────────────────────────────────────────────────────────────────
const sanity = createSanityClient({
  projectId: 'xr7z8rgt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skszmBLq69HEvXX0pEyrUT6SWB4UqPu3AIiPX4UAodIf7qJIlArSp6m4Vplw0mbNk7mYLxFZA1YVwPRnsRcgVrizlkMFDHI4jfo3mvMEQv9LatErkaSih16G93AqsJ9ITbKFjFeB4Zgd36uSpHOb6tHYh8ccCnqXHgMl2PXXZgDRLZY0CURA',
  useCdn: false,
})

// ── Helpers ───────────────────────────────────────────────────────────────────
function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    }).on('error', reject)
  })
}

function extractPlainText(richText) {
  if (!richText || !richText.content) return ''
  return richText.content
    .flatMap((block) => block.content ?? [])
    .filter((node) => node.nodeType === 'text')
    .map((node) => node.value)
    .join(' ')
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// ── Main migration ────────────────────────────────────────────────────────────
async function migrate() {
  console.log('📦 Fetching Contentful entries...')
  const response = await contentful.getEntries({ content_type: 'portfolioItem', limit: 1000 })
  const items = response.items
  console.log(`   Found ${items.length} portfolioItem entries\n`)

  for (const item of items) {
    const { title, description, coverImage, demoUrl, sourceCodeUrl } = item.fields

    console.log(`→ Migrating: "${title}"`)

    // 1. Upload cover image to Sanity
    let sanityImageRef = null
    if (coverImage?.fields?.file?.url) {
      const imageUrl = 'https:' + coverImage.fields.file.url
      const filename = coverImage.fields.file.fileName ?? 'image.jpg'
      try {
        console.log(`   Uploading image: ${filename}`)
        const buffer = await fetchBuffer(imageUrl)
        const asset = await sanity.assets.upload('image', buffer, {
          filename,
          contentType: coverImage.fields.file.contentType ?? 'image/jpeg',
        })
        sanityImageRef = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
        console.log(`   ✅ Image uploaded: ${asset._id}`)
      } catch (err) {
        console.warn(`   ⚠️  Image upload failed: ${err.message}`)
      }
    }

    // 2. Build Sanity document
    const doc = {
      _type: 'project',
      title: String(title),
      slug: { _type: 'slug', current: slugify(String(title)) },
      description: extractPlainText(description),
      category: 'web',       // Default — edit in Studio after migration
      tags: [],
      technologies: [],
      featured: false,
      publishedAt: item.sys.createdAt,
      ...(demoUrl && { demoUrl: String(demoUrl) }),
      ...(sourceCodeUrl && { sourceCodeUrl: String(sourceCodeUrl) }),
      ...(sanityImageRef && { coverImage: sanityImageRef }),
    }

    // 3. Create in Sanity (idempotent via deterministic _id)
    const sanityId = `contentful-${item.sys.id}`
    try {
      await sanity.createOrReplace({ ...doc, _id: sanityId })
      console.log(`   ✅ Created Sanity document: ${sanityId}\n`)
    } catch (err) {
      console.error(`   ❌ Failed to create document: ${err.message}\n`)
    }
  }

  console.log('🎉 Migration complete!')
  console.log('   Open https://www.sanity.io/manage/personal/project/xr7z8rgt to review.')
  console.log('   You can now edit category, tags, technologies etc. in the Studio.')
}

migrate().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
