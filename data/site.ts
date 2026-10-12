export const site = {
  name: 'Sachiv Chandramohan',
  role: 'AI Engineer',
  tagline: 'Medical AI → accelerated compute. Previously founding engineer @ Mednoia.',
  bio: "I'm Sachiv Chandramohan, an AI engineer working across medical AI and accelerated compute — from HeAR acoustic screening (0.8245 AUC) and multimodal TB systems to CUDA kernels and on-device inference. Previously founding engineer at Mednoia; I also freelance on production RAG and agent systems.",
  location: 'India · Remote',
  email: 'sachiv.csv@gmail.com',
  socials: [
    { label: 'github', href: 'https://github.com/SACHokstack' },
    { label: 'linkedin', href: 'https://linkedin.com/in/sachiv-c' },
    { label: 'huggingface', href: 'https://huggingface.co/sach3v' },
    { label: 'email', href: 'mailto:sachiv.csv@gmail.com' },
  ],
  stats: [
    { value: '0.8245', label: 'AUC acoustic screening' },
    { value: '$20K', label: 'hackathon winnings' },
    { value: '23', label: 'languages in eval bench' },
    { value: '1,400+', label: 'manuscripts in RAG' },
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

export type JobKind = 'fulltime' | 'freelance' | 'research' | 'education'

export type Job = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  kind: JobKind
  link?: string
}

export const jobGroups: { kind: JobKind; label: string }[] = [
  { kind: 'fulltime', label: 'Experience' },
  { kind: 'freelance', label: 'Freelance' },
  { kind: 'research', label: 'Research' },
  { kind: 'education', label: 'Education' },
]

// Source of truth: resume (Oct 2026).
export const jobs: Job[] = [
  {
    company: 'Mednoia',
    role: 'Founding Engineer',
    period: 'Jun 2026 — Sep 2026',
    location: 'Seattle, WA',
    summary:
      'Owned the full experimentation pipeline for acoustic screening on Google HeAR embeddings + PyTorch classifier: 0.8245 AUC (78.7% sensitivity, 71.3% specificity). Built a robustness pipeline (event isolation, codec/noise/gain augmentation) lifting AUC 0.782 → 0.8245, and shipped inference via a Flask API.',
    kind: 'fulltime',
  },
  {
    company: 'ISSG & SpineDAO',
    role: 'AI Engineer (Freelance)',
    period: 'Sep 2025 — Dec 2025',
    location: 'Remote',
    summary:
      'Built production AI systems combining retrieval + generation over 1,400+ biomedical manuscripts, and automated research bots with Gemini File Search and the ElizaOS agent framework.',
    kind: 'freelance',
  },
  {
    company: 'Breast Cancer Prediction (DCE-MRI)',
    role: 'Research Intern, Medical Imaging',
    period: 'Jul 2025 — Sep 2025',
    location: 'Remote',
    summary:
      'Cut accelerator memory for a large 3D nnU-Net segmentation model by redesigning multi-channel inputs as single-channel, improving GPU training efficiency.',
    kind: 'research',
  },
  {
    company: 'Anna University (RCC), Coimbatore',
    role: 'B.Tech, AI & Data Science',
    period: '2022 — 2026',
    location: 'Coimbatore, TN',
    summary: 'Undergraduate degree in Artificial Intelligence & Data Science.',
    kind: 'education',
  },
  {
    company: 'IIT Madras',
    role: 'B.Sc. Data Science (Online)',
    period: '2022 — Present',
    location: 'Remote',
    summary: 'Online degree in Data Science alongside B.Tech.',
    kind: 'education',
  },
]

export const projects: Project[] = [
  {
    slug: 'bigtb6',
    title: 'BigTB6 — multimodal TB screening',
    category: 'Medical AI',
    description:
      'Multimodal architecture fusing self-supervised HeAR acoustic embeddings with MedGemma + MedSigLIP vision-language models, with domain-aware expert routing for natural vs. forced coughs. 0.75 patient-level AUC, 5-fold CV across 33K samples. 2nd place, Agentic Track — MedGemma Impact Challenge ($5,000, 850+ teams).',
    year: '2026',
    tech: ['HeAR', 'MedGemma', 'MedSigLIP', 'PyTorch'],
    link: 'https://bigtb6.vercel.app',
  },
  {
    slug: 'orca-g4',
    title: 'ORCA-G4 — on-device oral cancer screening',
    category: 'Medical Vision AI',
    description:
      'YOLO11 lesion-detection pipeline (273 images → 362 crops, up to 0.553 mAP@50), then Gemma fine-tuned with LoRA + 4-bit quantization on a single RTX 3090 for offline vision-language classification with JAX-exported on-device deployment.',
    year: '2025',
    tech: ['YOLO11', 'Gemma', 'LoRA', 'JAX', '4-bit'],
    extraLinks: [
      {
        label: 'model',
        href: 'https://huggingface.co/sach3v/Gemma-4-e2b-custom-oral_cancer/tree/main',
      },
    ],
  },
  {
    slug: 'indicphi-bench',
    title: 'IndicPHI-Bench — multilingual eval framework',
    category: 'Evaluation',
    description:
      'Reproducible evaluation framework spanning 23 Indian languages and 13 scripts; fine-tuned a 237M-parameter MuRIL encoder for 50 entity types to study multilingual transfer and character-level leakage.',
    year: '2025',
    tech: ['MuRIL', 'Multilingual NER', 'Eval Harness'],
  },
  {
    slug: 'gpu-kernels',
    title: 'GPU kernel optimization / inference engineering',
    category: 'Systems',
    description:
      'Progressively-tiled CUDA GEMM kernels (memory hierarchy, register tiling, occupancy); extending to attention and inference optimization with a focus on CUDA and FlashAttention.',
    year: '2025',
    tech: ['CUDA', 'GEMM', 'FlashAttention'],
  },
]

export const skills: { name: string; category: string }[] = [
  { name: 'PyTorch & JAX', category: 'ML Frameworks' },
  { name: 'LoRA / QLoRA', category: 'Fine-tuning' },
  { name: 'RAG & Agents', category: 'LLM Engineering' },
  { name: 'CUDA & GEMM', category: 'Accelerated Compute' },
  { name: 'On-device inference', category: 'Deployment' },
  { name: 'Multilingual eval', category: 'Evaluation' },
]

export const achievements: string[] = [
  '2nd place, Agentic Track — Google Research × Kaggle MedGemma Impact Challenge ($5,000, 850+ teams)',
  'Midpoint & Small Prize — BIOxAI Hackathon, BioProtocol ($15,000, 5,000+ teams)',
  'Top 14 / 2,293 — NVIDIA-hosted hackathon · 3× national hackathon finalist',
  'OpenMed PR #725 — leakage heatmap by label × language for multilingual eval',
  'Oracle Cloud Certified Architect',
]

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello world',
    date: '2026-01-01',
    excerpt:
      'Placeholder — replace with your first note. The resume is now the source of truth for the rest of the site.',
  },
]
