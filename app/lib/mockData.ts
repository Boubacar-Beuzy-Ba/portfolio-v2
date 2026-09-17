// Données de démonstration pour tester les composants

export const mockSkills = [
  // Web Development
  { name: 'React', level: 95, category: 'web' as const },
  { name: 'Next.js', level: 90, category: 'web' as const },
  { name: 'TypeScript', level: 90, category: 'web' as const },
  { name: 'Tailwind CSS', level: 95, category: 'web' as const },
  { name: 'Node.js', level: 85, category: 'web' as const },

  // Data Analysis
  { name: 'SQL', level: 90, category: 'data' as const },
  { name: 'Excel VBA', level: 85, category: 'data' as const },
  { name: 'Looker Studio', level: 80, category: 'data' as const },
  { name: 'Python/Pandas', level: 75, category: 'data' as const },

  // AI & Automation
  { name: 'Prompt Engineering', level: 90, category: 'ai' as const },
  { name: 'AI Integration', level: 85, category: 'ai' as const },
  { name: 'ChatGPT API', level: 88, category: 'ai' as const },
  { name: 'Automation Tools', level: 80, category: 'ai' as const },

  // SAAS & Product
  { name: 'Product Development', level: 85, category: 'saas' as const },
  { name: 'API Design', level: 80, category: 'saas' as const },
  { name: 'Cloud Services', level: 75, category: 'saas' as const },

  // Tools
  { name: 'Git/GitHub', level: 90, category: 'tools' as const },
  { name: 'VS Code', level: 95, category: 'tools' as const },
  { name: 'Figma', level: 75, category: 'tools' as const },
]

export const mockExperiences = [
  {
    title: 'Head of Operations Excellence',
    company: 'Logistics E-commerce Company',
    location: 'Dakar, Sénégal',
    startDate: 'Jan 2023',
    current: true,
    description:
      'Leading operational excellence initiatives in a fast-growing e-commerce logistics startup. Driving process optimization, data-driven decision making, and team performance improvement.',
    achievements: [
      'Improved operational efficiency by 30% through process automation',
      'Implemented data analytics dashboards for real-time monitoring',
      'Reduced delivery times by 25% through route optimization',
      'Built and managed a high-performing team of 15+ people',
    ],
    skills: ['SQL', 'Excel VBA', 'Looker Studio', 'Process Optimization', 'Team Management'],
  },
  {
    title: 'Customer Success Manager',
    company: 'Tech SaaS Company',
    location: 'Remote',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    current: false,
    description:
      'Managed customer relationships and ensured successful product adoption. Acted as the bridge between customers and product team.',
    achievements: [
      'Maintained 95%+ customer satisfaction rate',
      'Reduced churn by 40% through proactive engagement',
      'Onboarded 50+ enterprise clients',
      'Created customer success playbooks and documentation',
    ],
    skills: ['Customer Relations', 'Data Analysis', 'CRM Tools', 'Technical Support'],
  },
  {
    title: 'IT Customer Support Specialist',
    company: 'Various Clients',
    location: 'Dakar, Sénégal',
    startDate: 'Jan 2019',
    endDate: 'May 2021',
    current: false,
    description:
      'Provided technical support and IT solutions to various clients. Handled troubleshooting, software installations, and network configuration.',
    achievements: [
      'Resolved 500+ technical issues with 98% satisfaction',
      'Automated repetitive tasks with VBA scripts',
      'Set up IT infrastructure for 10+ small businesses',
      'Trained 100+ users on software tools',
    ],
    skills: ['Technical Support', 'Windows/Linux', 'Networking', 'VBA', 'Training'],
  },
]

export const mockProjects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.',
    category: 'web' as const,
    tags: ['Next.js', 'React', 'Stripe', 'PostgreSQL'],
    coverImage: '/projects/ecommerce.jpg',
    demoUrl: 'https://demo.example.com',
    sourceCodeUrl: 'https://github.com/example',
    featured: true,
    metrics: {
      users: '10K+ users',
      performance: '< 1s load time',
      impact: '+40% conversion',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Stripe', 'PostgreSQL'],
  },
  {
    id: '2',
    title: 'Sales Analytics Dashboard',
    description:
      'Interactive Looker Studio dashboard analyzing sales data across multiple regions. Features drill-down capabilities and automated reporting.',
    category: 'data' as const,
    tags: ['Looker Studio', 'SQL', 'BigQuery'],
    coverImage: '/projects/analytics.jpg',
    demoUrl: 'https://lookerstudio.google.com/example',
    featured: true,
    metrics: {
      users: 'Company-wide',
      performance: 'Real-time',
      impact: 'Data-driven decisions',
    },
    technologies: ['Looker Studio', 'SQL', 'BigQuery', 'Data Visualization'],
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description:
      'AI-powered content generation tool using GPT-4 API. Features custom prompts, templates, and content optimization.',
    category: 'ai' as const,
    tags: ['GPT-4', 'Next.js', 'AI'],
    coverImage: '/projects/ai-content.jpg',
    demoUrl: 'https://ai-tool.example.com',
    sourceCodeUrl: 'https://github.com/example/ai-content',
    featured: true,
    metrics: {
      users: '500+ users',
      performance: '< 2s generation',
      impact: '10x faster content creation',
    },
    technologies: ['GPT-4', 'Next.js', 'TypeScript', 'OpenAI API'],
  },
]

export const mockSAASProducts = [
  {
    name: 'TaskFlow Pro',
    tagline: 'Streamline your workflow with AI-powered task management',
    description:
      'TaskFlow Pro is an intelligent task management platform that uses AI to prioritize your work, suggest optimal schedules, and automate repetitive workflows. Perfect for individuals and teams looking to boost productivity.',
    logo: '/saas/taskflow-logo.png',
    screenshots: [
      { image: '/saas/taskflow-1.jpg', caption: 'Dashboard Overview' },
      { image: '/saas/taskflow-2.jpg', caption: 'AI Task Prioritization' },
      { image: '/saas/taskflow-3.jpg', caption: 'Team Collaboration' },
    ],
    features: [
      {
        title: 'AI Task Prioritization',
        description: 'Smart algorithms analyze your tasks and suggest the best order to tackle them',
        icon: 'Brain',
      },
      {
        title: 'Automated Workflows',
        description: 'Create custom automation rules to handle repetitive tasks',
        icon: 'Zap',
      },
      {
        title: 'Team Collaboration',
        description: 'Real-time collaboration with your team members',
        icon: 'Users',
      },
      {
        title: 'Advanced Analytics',
        description: 'Detailed insights into your productivity patterns',
        icon: 'BarChart',
      },
    ],
    metrics: {
      users: '5K+ users',
      revenue: '$10K MRR',
      growth: '25% MoM',
    },
    websiteUrl: 'https://taskflow.example.com',
    status: 'active' as const,
    technologies: ['Next.js', 'React', 'PostgreSQL', 'OpenAI API', 'Stripe'],
    testimonials: [
      {
        author: 'Sarah Johnson',
        role: 'Product Manager',
        content:
          'TaskFlow Pro has transformed how our team manages projects. The AI prioritization is incredibly accurate!',
        avatar: '/testimonials/sarah.jpg',
      },
    ],
  },
]

export const mockDataProjects = [
  {
    title: 'Logistics Performance Dashboard',
    description:
      'Comprehensive Looker Studio dashboard tracking delivery performance, route efficiency, and driver metrics across the entire logistics network.',
    category: 'looker' as const,
    coverImage: '/data/logistics-dashboard.jpg',
    dashboardUrl: 'https://lookerstudio.google.com/example',
    insights: [
      'Identified 20% reduction opportunity in delivery costs through route optimization',
      'Discovered peak delivery hours for better resource allocation',
      'Found correlation between weather patterns and delivery delays',
    ],
    tools: ['Looker Studio', 'BigQuery', 'SQL', 'Google Sheets'],
    datasets: 'Delivery data from 50K+ shipments over 6 months',
  },
  {
    title: 'Sales Automation with Excel VBA',
    description:
      'Automated sales reporting system using Excel VBA. Generates weekly reports, sends email notifications, and updates dashboards automatically.',
    category: 'excel' as const,
    coverImage: '/data/excel-automation.jpg',
    insights: [
      'Reduced report generation time from 4 hours to 5 minutes',
      'Eliminated manual data entry errors',
      'Enabled daily instead of weekly reporting',
    ],
    tools: ['Excel', 'VBA', 'Power Query', 'Outlook Integration'],
    datasets: 'Sales data from multiple regional offices',
  },
  {
    title: 'Customer Churn Analysis',
    description:
      'SQL-based analysis to identify patterns in customer churn. Created predictive models to flag at-risk customers.',
    category: 'sql' as const,
    coverImage: '/data/churn-analysis.jpg',
    insights: [
      'Identified top 5 factors contributing to churn',
      'Predicted at-risk customers with 85% accuracy',
      'Recommended retention strategies that reduced churn by 30%',
    ],
    tools: ['SQL', 'PostgreSQL', 'Python', 'Jupyter Notebooks'],
    datasets: 'Customer behavior data from 10K+ users over 2 years',
  },
]

export const mockAIProjects = [
  {
    title: 'Smart Email Assistant',
    description:
      'AI-powered email assistant that drafts responses, categorizes emails, and suggests actions based on email content.',
    category: 'ai-integration' as const,
    coverImage: '/ai/email-assistant.jpg',
    demoUrl: 'https://email-ai.example.com',
    githubUrl: 'https://github.com/example/email-assistant',
    prompts: [
      {
        title: 'Professional Email Response',
        prompt: `You are a professional email assistant. Draft a polite response to: "[Email content]"

Requirements:
- Professional tone
- Address all points raised
- Keep it concise (under 150 words)
- Include appropriate greeting and sign-off`,
        result:
          'Generates contextually appropriate email responses with proper formatting and professional language.',
      },
      {
        title: 'Email Categorization',
        prompt: `Analyze this email and categorize it into one of these categories:
[Urgent, Follow-up, Information, Action Required, Spam]

Email: "[Email content]"

Also provide a brief reason for the categorization.`,
        result:
          'Accurately categorizes emails and provides reasoning, helping prioritize inbox management.',
      },
    ],
    technologies: ['GPT-4', 'Next.js', 'TypeScript', 'Gmail API'],
    aiModels: ['GPT-4', 'Claude'],
  },
  {
    title: 'Content Optimizer',
    description:
      'AI tool that analyzes and optimizes written content for SEO, readability, and engagement. Provides suggestions for improvement.',
    category: 'prompt-engineering' as const,
    coverImage: '/ai/content-optimizer.jpg',
    demoUrl: 'https://content-ai.example.com',
    prompts: [
      {
        title: 'SEO Optimization Prompt',
        prompt: `Analyze this content for SEO optimization:

[Content]

Provide:
1. Main keywords identified
2. Keyword density analysis
3. Suggestions for meta description
4. Title tag recommendations
5. Areas to improve for better SEO`,
        result:
          'Comprehensive SEO analysis with actionable recommendations to improve search rankings.',
      },
    ],
    technologies: ['GPT-4', 'React', 'TypeScript', 'Vercel'],
    aiModels: ['GPT-4', 'GPT-3.5'],
  },
]

// Helper function to transform mock data to match component props
export function getMockDataForComponents() {
  return {
    skills: mockSkills,
    experiences: mockExperiences,
    projects: mockProjects,
    saasProducts: mockSAASProducts,
    dataProjects: mockDataProjects,
    aiProjects: mockAIProjects,
  }
}
