import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'dataProject',
  title: 'Data Analytics Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'SQL Analysis', value: 'sql' },
          { title: 'Excel/VBA', value: 'excel' },
          { title: 'Looker Studio', value: 'looker' },
          { title: 'Python/Pandas', value: 'python' },
          { title: 'Automation', value: 'automation' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover/Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: 'Screenshot of dashboard or visualization',
    }),
    defineField({
      name: 'dashboardUrl',
      title: 'Live Dashboard URL',
      type: 'url',
      description: 'URL to live Looker Studio dashboard or similar',
    }),
    defineField({
      name: 'embedCode',
      title: 'Embed Code',
      type: 'text',
      rows: 3,
      description: 'Iframe embed code for dashboard',
    }),
    defineField({
      name: 'insights',
      title: 'Key Insights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Main findings or insights from this analysis',
    }),
    defineField({
      name: 'tools',
      title: 'Tools & Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'e.g., SQL, Excel, Looker Studio, Python, etc.',
    }),
    defineField({
      name: 'datasets',
      title: 'Datasets Used',
      type: 'string',
      description: 'Brief description of data sources',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      category: 'category',
    },
    prepare({ title, media, category }) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Newest First',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
