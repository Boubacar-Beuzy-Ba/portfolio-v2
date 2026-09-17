import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
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
          { title: 'Web Application', value: 'web' },
          { title: 'Data Analysis', value: 'data' },
          { title: 'AI Project', value: 'ai' },
          { title: 'SAAS Product', value: 'saas' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'demoUrl',
      title: 'Live URL (Vercel / Production)',
      type: 'url',
      description: 'e.g. https://my-project.vercel.app',
    }),
    defineField({
      name: 'sourceCodeUrl',
      title: 'GitHub Repository URL',
      type: 'url',
      description: 'e.g. https://github.com/Boubacar-Beuzy-Ba/my-project',
    }),
    defineField({
      name: 'githubRepo',
      title: 'GitHub Repo (owner/repo)',
      type: 'string',
      description: 'Short form e.g. Boubacar-Beuzy-Ba/finflex — used to display GitHub stats',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project in featured section',
      initialValue: false,
    }),
    defineField({
      name: 'metrics',
      title: 'Project Metrics',
      type: 'object',
      fields: [
        {
          name: 'users',
          title: 'Users/Reach',
          type: 'string',
          description: 'e.g., "10K+ users", "50+ clients"',
        },
        {
          name: 'performance',
          title: 'Performance Metric',
          type: 'string',
          description: 'e.g., "99.9% uptime", "< 1s load time"',
        },
        {
          name: 'impact',
          title: 'Business Impact',
          type: 'string',
          description: 'e.g., "30% increase in conversions"',
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
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
      description: 'Order in which this project appears',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      category: 'category',
      featured: 'featured',
    },
    prepare({ title, media, category, featured }) {
      return {
        title,
        subtitle: `${category}${featured ? ' • Featured' : ''}`,
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
