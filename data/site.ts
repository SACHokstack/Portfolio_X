export const site = {
  name: 'Your Name',
  role: 'Engineer',
  tagline: 'I build minimal, fast things for the web.',
  bio: 'Short one-paragraph summary goes here. Who you are, what you do, what you care about. Keep it to 2–3 sentences like leerob.com.',
  location: 'City, Country',
  email: 'you@example.com',
  socials: [
    { label: 'github', href: 'https://github.com/' },
    { label: 'x', href: 'https://x.com/' },
    { label: 'linkedin', href: 'https://linkedin.com/' },
    { label: 'email', href: 'mailto:you@example.com' },
  ],
}

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
}

export type Project = {
  slug: string
  title: string
  description: string
  year: string
  href?: string
}

export type Job = {
  company: string
  role: string
  period: string
  location: string
  summary: string
}

// Placeholder content — replace with real data next.
export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello world',
    date: '2026-01-01',
    excerpt: 'Placeholder post. Delete or replace with your writing.',
  },
]

export const projects: Project[] = [
  {
    slug: 'example-project',
    title: 'Example project',
    description: 'One-line description of what it does and why it matters.',
    year: '2026',
  },
]

export const jobs: Job[] = [
  {
    company: 'Example Co',
    role: 'Engineer',
    period: '2024 — Present',
    location: 'Remote',
    summary: 'One line on what you did / impact.',
  },
]
