import { client } from './sanity'
import type {
  SanitySkill,
  SanityProject,
  SanityExperience,
  SanitySAAS,
  SanityDataProject,
  SanityAIProject,
} from './sanity'

// ===== SKILLS =====
export async function getAllSkills(): Promise<SanitySkill[]> {
  const query = `*[_type == "skill"] | order(order asc, level desc) {
    _id,
    _type,
    name,
    category,
    level,
    icon,
    description,
    order
  }`

  return await client.fetch(query)
}

export async function getSkillsByCategory(
  category: 'web' | 'data' | 'ai' | 'saas' | 'tools'
): Promise<SanitySkill[]> {
  const query = `*[_type == "skill" && category == $category] | order(level desc) {
    _id,
    _type,
    name,
    category,
    level,
    icon,
    description
  }`

  return await client.fetch(query, { category })
}

// ===== PROJECTS =====
export async function getAllProjects(): Promise<SanityProject[]> {
  const query = `*[_type == "project"] | order(order asc, publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    description,
    category,
    tags,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url,
    demoUrl,
    sourceCodeUrl,
    featured,
    metrics,
    technologies,
    publishedAt,
    order
  }`

  return await client.fetch(query)
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  const query = `*[_type == "project" && featured == true] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    description,
    category,
    tags,
    "coverImage": coverImage.asset->url,
    demoUrl,
    sourceCodeUrl,
    featured,
    metrics,
    technologies,
    publishedAt
  }`

  return await client.fetch(query)
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    description,
    category,
    tags,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url,
    demoUrl,
    sourceCodeUrl,
    featured,
    metrics,
    technologies,
    publishedAt
  }`

  return await client.fetch(query, { slug })
}

// ===== EXPERIENCE =====
export async function getAllExperiences(): Promise<SanityExperience[]> {
  const query = `*[_type == "experience"] | order(order asc, startDate desc) {
    _id,
    _type,
    title,
    company,
    location,
    startDate,
    endDate,
    current,
    description,
    achievements,
    skills,
    order
  }`

  return await client.fetch(query)
}

export async function getCurrentExperience(): Promise<SanityExperience | null> {
  const query = `*[_type == "experience" && current == true][0] {
    _id,
    _type,
    title,
    company,
    location,
    startDate,
    endDate,
    current,
    description,
    achievements,
    skills
  }`

  return await client.fetch(query)
}

// ===== SAAS PRODUCTS =====
export async function getAllSAASProducts(): Promise<SanitySAAS[]> {
  const query = `*[_type == "saasProduct"] | order(order asc) {
    _id,
    _type,
    name,
    slug,
    tagline,
    description,
    "logo": logo.asset->url,
    "screenshots": screenshots[]{
      "image": image.asset->url,
      caption
    },
    features,
    metrics,
    websiteUrl,
    status,
    technologies,
    testimonials[]{
      author,
      role,
      content,
      "avatar": avatar.asset->url
    },
    order
  }`

  return await client.fetch(query)
}

export async function getActiveSAASProducts(): Promise<SanitySAAS[]> {
  const query = `*[_type == "saasProduct" && status == "active"] | order(order asc) {
    _id,
    _type,
    name,
    slug,
    tagline,
    description,
    "logo": logo.asset->url,
    "screenshots": screenshots[]{
      "image": image.asset->url,
      caption
    },
    features,
    metrics,
    websiteUrl,
    status,
    technologies,
    order
  }`

  return await client.fetch(query)
}

// ===== DATA PROJECTS =====
export async function getAllDataProjects(): Promise<SanityDataProject[]> {
  const query = `*[_type == "dataProject"] | order(order asc, publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    description,
    category,
    "coverImage": coverImage.asset->url,
    dashboardUrl,
    embedCode,
    insights,
    tools,
    datasets,
    publishedAt,
    order
  }`

  return await client.fetch(query)
}

export async function getDataProjectsByCategory(
  category: 'sql' | 'excel' | 'looker' | 'python' | 'automation'
): Promise<SanityDataProject[]> {
  const query = `*[_type == "dataProject" && category == $category] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    description,
    category,
    "coverImage": coverImage.asset->url,
    dashboardUrl,
    insights,
    tools,
    publishedAt
  }`

  return await client.fetch(query, { category })
}

// ===== AI PROJECTS =====
export async function getAllAIProjects(): Promise<SanityAIProject[]> {
  const query = `*[_type == "aiProject"] | order(order asc, publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    description,
    category,
    "coverImage": coverImage.asset->url,
    demoUrl,
    githubUrl,
    prompts,
    technologies,
    aiModels,
    publishedAt,
    order
  }`

  return await client.fetch(query)
}

export async function getAIProjectsByCategory(
  category: 'prompt-engineering' | 'ai-integration' | 'automation' | 'chatbot'
): Promise<SanityAIProject[]> {
  const query = `*[_type == "aiProject" && category == $category] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    description,
    category,
    "coverImage": coverImage.asset->url,
    demoUrl,
    githubUrl,
    prompts,
    technologies,
    aiModels,
    publishedAt
  }`

  return await client.fetch(query, { category })
}

// ===== UTILITY FUNCTIONS =====

// Get all content for homepage
export async function getHomePageData() {
  const [skills, projects, experiences, saasProducts, dataProjects, aiProjects] =
    await Promise.all([
      getAllSkills(),
      getAllProjects(),
      getAllExperiences(),
      getActiveSAASProducts(),
      getAllDataProjects(),
      getAllAIProjects(),
    ])

  return {
    skills,
    projects,
    experiences,
    saasProducts,
    dataProjects,
    aiProjects,
  }
}

// Get counts for stats
export async function getContentCounts() {
  const query = `{
    "skills": count(*[_type == "skill"]),
    "projects": count(*[_type == "project"]),
    "experiences": count(*[_type == "experience"]),
    "saasProducts": count(*[_type == "saasProduct"]),
    "dataProjects": count(*[_type == "dataProject"]),
    "aiProjects": count(*[_type == "aiProject"])
  }`

  return await client.fetch(query)
}
