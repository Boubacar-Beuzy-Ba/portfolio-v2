/**
 * Seed Sanity with content extracted from Boubacar Ba's CV
 * Run: node scripts/seed-from-cv.mjs
 */

import { createClient } from '@sanity/client'

const sanity = createClient({
  projectId: 'xr7z8rgt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skszmBLq69HEvXX0pEyrUT6SWB4UqPu3AIiPX4UAodIf7qJIlArSp6m4Vplw0mbNk7mYLxFZA1YVwPRnsRcgVrizlkMFDHI4jfo3mvMEQv9LatErkaSih16G93AqsJ9ITbKFjFeB4Zgd36uSpHOb6tHYh8ccCnqXHgMl2PXXZgDRLZY0CURA',
  useCdn: false,
})

// ── EXPERIENCES ──────────────────────────────────────────────────────────────
const experiences = [
  {
    _id: 'exp-maad',
    _type: 'experience',
    title: 'Head of Operations',
    company: 'Maad',
    location: 'Dakar, Senegal',
    startDate: '2024-07-01',
    current: true,
    description: 'Leading operations with a focus on process analysis and custom software solutions to improve efficiency and reduce costs.',
    achievements: [
      'Analyzed warehouse and logistics processes and designed custom software solutions (operational dashboards, performance-tracking systems) to improve efficiency and reduce costs.',
      'Acted as liaison between operations, logistics and technical teams to specify and improve internal tools and delivery workflows.',
      'Defined operational KPIs and built automated reporting systems used for staff evaluation and management decision-making.',
    ],
    skills: ['Process Analysis', 'Dashboard Design', 'KPI Definition', 'SQL', 'Operations Management'],
    order: 1,
  },
  {
    _id: 'exp-rubyx',
    _type: 'experience',
    title: 'Customer Success Manager',
    company: 'Rubyx',
    location: 'Dakar, Senegal',
    startDate: '2022-11-01',
    endDate: '2024-07-01',
    current: false,
    description: 'Bridged business users and the product team, translating client needs into system improvements and measurable retention gains.',
    achievements: [
      'Served as the bridge between business users and the product team, translating client needs into system improvements and feature requirements.',
      'Increased client retention by 20% through structured onboarding and success-tracking systems.',
      'Identified upsell opportunities aligned with clients\' business objectives; developed user training and onboarding materials.',
    ],
    skills: ['Customer Success', 'Product Feedback', 'Onboarding', 'Stakeholder Management', 'Upselling'],
    order: 2,
  },
  {
    _id: 'exp-jumia',
    _type: 'experience',
    title: 'Head of Operational Excellence',
    company: 'Jumia Senegal',
    location: 'Dakar, Senegal',
    startDate: '2021-07-01',
    endDate: '2022-11-01',
    current: false,
    description: 'Coordinated logistics systems rollout and directed incident-tracking workflows to ensure operational reliability.',
    achievements: [
      'Coordinated the rollout and testing of logistics systems, ensuring reliability and adoption across teams.',
      'Directed incident-tracking and compliance workflows; reduced item losses through improved package tracking and exception-handling processes.',
    ],
    skills: ['Logistics Systems', 'Incident Management', 'Compliance', 'Process Improvement', 'Team Leadership'],
    order: 3,
  },
  {
    _id: 'exp-jade',
    _type: 'experience',
    title: 'IT Systems Associate',
    company: 'JADE E-Service',
    location: 'Dakar, Senegal',
    startDate: '2018-11-01',
    endDate: '2021-07-01',
    current: false,
    description: 'Supported backend systems for Jumia operations and facilitated cross-team issue resolution.',
    achievements: [
      'Supported backend systems for Jumia operations and documented workflows and processes.',
      'Facilitated cross-team issue resolution and proposed feature improvements to the central product team.',
    ],
    skills: ['Backend Systems', 'Documentation', 'IT Support', 'Process Documentation'],
    order: 4,
  },
  {
    _id: 'exp-matforce',
    _type: 'experience',
    title: 'Technical Support Intern',
    company: 'Matforce CSI',
    location: 'Dakar, Senegal',
    startDate: '2017-09-01',
    endDate: '2018-10-01',
    current: false,
    description: 'Provided first-line technical support, diagnostics, and hardware/software configuration for staff.',
    achievements: [
      'Provided first-line technical support, diagnostics, and hardware/software configuration for staff.',
    ],
    skills: ['Technical Support', 'Hardware', 'Software Configuration', 'Diagnostics'],
    order: 5,
  },
]

// ── SKILLS ───────────────────────────────────────────────────────────────────
const skills = [
  // Web / Frontend
  { _id: 'skill-react',       _type: 'skill', name: 'React',        category: 'web',   level: 90, order: 1 },
  { _id: 'skill-nextjs',      _type: 'skill', name: 'Next.js',      category: 'web',   level: 88, order: 2 },
  { _id: 'skill-typescript',  _type: 'skill', name: 'TypeScript',   category: 'web',   level: 85, order: 3 },
  { _id: 'skill-tailwind',    _type: 'skill', name: 'Tailwind CSS', category: 'web',   level: 85, order: 4 },
  { _id: 'skill-reactnative', _type: 'skill', name: 'React Native', category: 'web',   level: 75, order: 5 },
  // Backend & Data
  { _id: 'skill-nodejs',      _type: 'skill', name: 'Node.js',      category: 'data',  level: 78, order: 1 },
  { _id: 'skill-postgresql',  _type: 'skill', name: 'PostgreSQL',   category: 'data',  level: 80, order: 2 },
  { _id: 'skill-sql',         _type: 'skill', name: 'SQL',          category: 'data',  level: 82, order: 3 },
  { _id: 'skill-supabase',    _type: 'skill', name: 'Supabase',     category: 'data',  level: 75, order: 4 },
  { _id: 'skill-convex',      _type: 'skill', name: 'Convex',       category: 'data',  level: 70, order: 5 },
  // Analytics
  { _id: 'skill-gds',         _type: 'skill', name: 'Google Data Studio', category: 'data', level: 78, order: 6 },
  { _id: 'skill-excel',       _type: 'skill', name: 'Excel',        category: 'data',  level: 85, order: 7 },
  // Tools
  { _id: 'skill-git',         _type: 'skill', name: 'Git / GitHub', category: 'tools', level: 88, order: 1 },
  { _id: 'skill-restapi',     _type: 'skill', name: 'REST APIs',    category: 'tools', level: 85, order: 2 },
  { _id: 'skill-sanity',      _type: 'skill', name: 'Sanity CMS',   category: 'tools', level: 70, order: 3 },
  // SAAS / Business Systems
  { _id: 'skill-erp',         _type: 'skill', name: 'ERP / POS Systems',     category: 'saas', level: 80, order: 1 },
  { _id: 'skill-sysanalysis', _type: 'skill', name: 'Business Systems Analysis', category: 'saas', level: 88, order: 2 },
  { _id: 'skill-reqgathering',_type: 'skill', name: 'Requirements Gathering', category: 'saas', level: 90, order: 3 },
]

// ── Featured projects from Contentful ────────────────────────────────────────
// Mark the most impressive projects as featured
const featuredProjectIds = [
  'contentful-5NxFi9kIY88UKGNfEFhcD5', // FinFlex
  'contentful-6AnEN5x9kqsfyVkd7j8cv2', // Daily UI AuthForm
  'contentful-4SJdvkJgwGXu8PDdaLR9nx', // GitHub User Search
  'contentful-1FEAK5zIev58WUVtaJtjjg', // Driving Plates Landing
  'contentful-7zQmdH87JIxHRma7q8FhSF', // Advice Generator
  'contentful-4N91EdMXHtfkWzRnlHQkQs', // Movie IMDB VueJS
]

// ── Pilora SAAS product ───────────────────────────────────────────────────────
const piloraProduct = {
  _id: 'saas-pilora',
  _type: 'saasProduct',
  name: 'Pilora',
  slug: { _type: 'slug', current: 'pilora' },
  tagline: 'Mobile ERP / POS for West African SMEs',
  description: 'An end-to-end business system (ERP / point-of-sale) designed for informal retailers in West Africa. Covers inventory, sales, and reporting in one mobile app.',
  features: [
    { title: 'Point of Sale', description: 'Fast, offline-capable POS for informal retailers', icon: '🛒' },
    { title: 'Inventory Management', description: 'Real-time stock tracking and alerts', icon: '📦' },
    { title: 'Sales Analytics', description: 'Dashboard with daily/weekly/monthly revenue insights', icon: '📊' },
    { title: 'Unified Identity', description: 'Single merchant identity across devices', icon: '👤' },
  ],
  websiteUrl: '',
  status: 'development',
  technologies: ['React Native', 'Next.js', 'TypeScript', 'Convex', 'PostgreSQL'],
  order: 1,
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function seed() {
  console.log('🌱 Seeding Sanity from CV data...\n')

  // Experiences
  console.log('📋 Creating experiences...')
  for (const exp of experiences) {
    await sanity.createOrReplace(exp)
    console.log(`   ✅ ${exp.title} @ ${exp.company}`)
  }

  // Skills
  console.log('\n🛠  Creating skills...')
  for (const skill of skills) {
    await sanity.createOrReplace(skill)
    console.log(`   ✅ ${skill.name} (${skill.category} - ${skill.level}%)`)
  }

  // Mark featured projects
  console.log('\n⭐ Marking featured projects...')
  for (const id of featuredProjectIds) {
    try {
      await sanity.patch(id).set({ featured: true }).commit()
      console.log(`   ✅ Featured: ${id}`)
    } catch {
      console.warn(`   ⚠️  Could not patch ${id}`)
    }
  }

  // Pilora SAAS product
  console.log('\n🚀 Creating Pilora SAAS product...')
  await sanity.createOrReplace(piloraProduct)
  console.log('   ✅ Pilora created')

  console.log('\n🎉 Seed complete! Refresh localhost:3000 to see the data.')
}

seed().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
