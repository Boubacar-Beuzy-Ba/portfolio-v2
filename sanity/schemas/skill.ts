import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'web' },
          { title: 'Data Analysis', value: 'data' },
          { title: 'AI & Automation', value: 'ai' },
          { title: 'SAAS & Product', value: 'saas' },
          { title: 'Tools & Others', value: 'tools' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Proficiency Level (%)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(100),
      description: 'Your proficiency level from 0 to 100',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide React icon name (e.g., "Code", "Database", "Brain")',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this skill appears (lower numbers appear first)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      level: 'level',
    },
    prepare({ title, subtitle, level }) {
      return {
        title,
        subtitle: `${subtitle} - ${level}%`,
      }
    },
  },
})
