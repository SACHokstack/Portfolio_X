export const site = {
  name: 'Sachiv C',
  role: 'AI Engineer & Creative Technologist',
  tagline: 'Building practical medical and agentic systems.',
  bio: "I'm an AI Engineer and Creative Technologist building intelligent systems that enhance human creativity and productivity. My work spans medical AI, audio screening, vision fine-tuning, autonomous agents, RAG systems, and product prototypes that turn research ideas into working tools.",
  location: 'Coimbatore, IN · Remote',
  email: 'sachiv.csv@gmail.com',
  socials: [
    { label: 'github', href: 'https://github.com/SACHokstack/' },
    { label: 'linkedin', href: 'https://linkedin.com/' },
    { label: 'huggingface', href: 'https://huggingface.co/sach3v' },
    { label: 'email', href: 'mailto:sachiv.csv@gmail.com' },
  ],
  stats: [
    { value: '10+', label: 'AI models tinkered' },
    { value: '5+', label: 'Projects deployed' },
    { value: '25+', label: 'Technologies' },
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
  category: string
  description: string
  year: string
  tech: string[]
  github?: string
  link?: string
  extraLinks?: { label: string; href: string }[]
}

export type Job = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  link?: string
}

// Recovered from the previous space-themed portfolio.
export const jobs: Job[] = [
  {
    company: 'SpineDAO',
    role: 'Jr AI Engineer',
    period: 'Sep 2025 — Present',
    location: 'Remote',
    summary: 'Building a social network for spine surgeons.',
  },
  {
    company: 'IEEE',
    role: 'Jr Researcher',
    period: 'Jul 2025 — Present',
    location: 'Remote',
    summary: 'Predicting breast cancer using DCE-MRI images.',
  },
  {
    company: 'BioProtocol',
    role: 'Hackathon Winner ($15,000)',
    period: 'Jun 2025',
    location: 'San Francisco, CA',
    summary: 'Built Chronos, an image-to-hypothesis generating engine.',
  },
  {
    company: 'Google DeepMind × Kaggle',
    role: 'Hackathon Winner ($5,000)',
    period: 'Feb 2026',
    location: 'Kaggle',
    summary:
      'Won the MedGemma Impact Challenge with BigTB6, a medical AI project focused on real-world clinical impact.',
    link: 'https://www.kaggle.com/competitions/med-gemma-impact-challenge/writeups/bigtb6',
  },
  {
    company: 'Anna University (RCC)',
    role: 'B.Tech AI&DS',
    period: 'Nov 2022 — Present',
    location: 'Coimbatore, TN',
    summary:
      'Focus on systems programming and algorithms. Built autonomous robotics projects.',
  },
  {
    company: 'IIT Madras',
    role: 'B.S. Data Science (AI/ML)',
    period: 'Sep 2022 — Present',
    location: 'Remote',
    summary: 'Specialized in AI/ML. Thesis on neural architecture search optimization.',
  },
]

export const projects: Project[] = [
  {
    slug: 'hear-tb',
    title: 'HeAR-TB — TB cough screening',
    category: 'Medical AI',
    description:
      'Domain-aware dual-head model for TB cough screening. Keeps Google HeAR frozen, trains separate experts for natural and forced coughs, then averages patient-level risk scores. Patient AUC 0.748, sensitivity ~0.78–0.83.',
    year: '2026',
    tech: ['Google HeAR', 'Python', 'Audio ML', 'Hugging Face'],
    link: 'https://big-tb6.vercel.app/',
    github: 'https://github.com/SACHokstack/Hear--Cough-Finetuning',
    extraLinks: [
      { label: 'demo', href: 'https://youtu.be/ubBDRxCwaeE' },
      { label: 'model', href: 'https://huggingface.co/sach3v/Domain_aware_dual_head_HEar' },
      { label: 'dataset', href: 'https://zenodo.org/records/10431329' },
    ],
  },
  {
    slug: 'prometheus-lab',
    title: 'Prometheus Lab — autonomous AI research lab',
    category: 'AI Research',
    description:
      'Autonomous AI research lab capable of conducting independent research, generating hypotheses, and executing experiments with minimal human intervention.',
    year: '2025',
    tech: ['Python', 'LangGraph', 'Multi-Agent Systems'],
    github: 'https://github.com/SACHokstack/Autonomous_AI_Research_Lab.git',
  },
  {
    slug: 'oral-cancer-gemma',
    title: 'Gemma 4 E2B oral-cancer vision fine-tune',
    category: 'Medical Vision AI',
    description:
      'Fine-tuned Gemma 4 E2B for oral-cancer visual identification using a custom oral YOLO dataset, supporting medical image screening workflows.',
    year: '2025',
    tech: ['Gemma 4 E2B', 'Vision Fine-Tuning', 'YOLO'],
    extraLinks: [
      {
        label: 'model',
        href: 'https://huggingface.co/sach3v/Gemma-4-e2b-custom-oral_cancer/tree/main',
      },
      {
        label: 'dataset',
        href: 'https://huggingface.co/datasets/sach3v/oral-yolo-dataset',
      },
    ],
  },
  {
    slug: 'chronos-discord',
    title: 'Chronos Discord bot',
    category: 'AI/ML',
    description:
      'Production-ready Chronos-based Discord chatbot with text, image, and voice capabilities.',
    year: '2025',
    tech: ['Python', 'PyTorch', 'Docker'],
    github: 'https://github.com/SACHokstack/DISCORDxCHRONOS',
  },
]

export const skills: { name: string; category: string }[] = [
  { name: 'Medical AI', category: 'Applied ML' },
  { name: 'Agent Systems', category: 'AI Agents' },
  { name: 'RAG & NLP', category: 'LLM Engineering' },
  { name: 'AI Inference', category: 'Model Serving' },
  { name: 'DevOps', category: 'Deployment' },
  { name: 'Product Prototypes', category: 'Build & Ship' },
]

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello world',
    date: '2026-01-01',
    excerpt:
      'Placeholder — replace with your first note. Previous site had no blog, so this is a fresh start.',
  },
]
