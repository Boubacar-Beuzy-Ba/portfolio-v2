import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aiProject',
  title: 'AI & Prompt Engineering Projects',
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
          { title: 'Prompt Engineering', value: 'prompt-engineering' },
          { title: 'AI Integration', value: 'ai-integration' },
          { title: 'Automation', value: 'automation' },
          { title: 'Chatbot/Assistant', value: 'chatbot' },
        ],
      },
      validation: (Rule) => Rule.required(),
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
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
      description: 'Link to live demo or showcase',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Repository',
      type: 'url',
    }),
    defineField({
      name: 'prompts',
      title: 'Featured Prompts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Prompt Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'prompt',
              title: 'The Prompt',
              type: 'text',
              rows: 5,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'result',
              title: 'Result/Output',
              type: 'text',
              rows: 5,
              description: 'Brief description of what this prompt achieves',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'prompt',
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: subtitle?.substring(0, 60) + '...',
              }
            },
          },
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
      name: 'aiModels',
      title: 'AI Models Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'e.g., GPT-4, Claude, Gemini, etc.',
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
