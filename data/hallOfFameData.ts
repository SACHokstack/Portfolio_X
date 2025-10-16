import { Person } from '@/components/HallOfFame'

/**
 * Hall of Fame / Mission Allies Data
 *
 * Data structure for the cosmic orbit layout of people you've met.
 *
 * Fields:
 * - id: Unique identifier
 * - name: Full name
 * - role: Their title or role
 * - relationship: Relationship type (determines emoji badge):
 *   - "Mentor" 🎯
 *   - "Collaborator" 🤝
 *   - "Hackathon Teammate" ⚡
 *   - "Inspiring Encounter" ✨
 *   - "Academic Advisor" 📚
 *   - "Workshop Instructor" 🔧
 * - caption: Fun, human description (shown in hover card)
 * - imageUrl: Path to photo (local /images/... or URL)
 * - orbitRadius: (Optional) Distance from center in pixels (default: auto)
 * - angle: (Optional) Starting angle in degrees (default: auto)
 * - speed: (Optional) Orbit speed multiplier (default: 1)
 */

export const hallOfFameData: Person[] = [
  {
    id: '1',
    name: 'Dr. Jane Smith',
    role: 'AI Research Lead at DeepMind',
    relationship: 'Mentor',
    caption: 'Met at NeurIPS 2024. Completely changed how I think about transformer architectures over coffee!',
    imageUrl: '/images/people/jane-smith.jpg', // Replace with actual paths
    orbitRadius: 200,
    angle: 0,
    speed: 1.2,
  },
  {
    id: '2',
    name: 'Alex Chen',
    role: 'Full-stack Developer',
    relationship: 'Hackathon Teammate',
    caption: 'Built an award-winning healthcare AI app in 36 sleepless hours at HackMIT. Still friends somehow!',
    imageUrl: '/images/people/alex-chen.jpg',
    orbitRadius: 280,
    angle: 45,
    speed: 0.9,
  },
  {
    id: '3',
    name: 'Prof. Michael Davis',
    role: 'Professor of Computer Science',
    relationship: 'Academic Advisor',
    caption: 'The algorithms professor who made me fall in love with computational complexity.',
    imageUrl: '/images/people/michael-davis.jpg',
    orbitRadius: 220,
    angle: 90,
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    role: 'Product Designer',
    relationship: 'Collaborator',
    caption: 'Co-designed my AI portfolio builder. Taught me that great design is invisible magic.',
    imageUrl: '/images/people/sarah-johnson.jpg',
    orbitRadius: 310,
    angle: 135,
    speed: 0.8,
  },
  {
    id: '5',
    name: 'Raj Patel',
    role: 'Startup Founder',
    relationship: 'Inspiring Encounter',
    caption: 'Went from intern to founder in 3 years. His story gave me the courage to dream bigger.',
    imageUrl: '/images/people/raj-patel.jpg',
    orbitRadius: 250,
    angle: 180,
  },
  {
    id: '6',
    name: 'Emily Zhang',
    role: 'ML Engineer at OpenAI',
    relationship: 'Workshop Instructor',
    caption: 'Led a mind-blowing workshop on LLM fine-tuning. Finally understood what LoRA actually does!',
    imageUrl: '/images/people/emily-zhang.jpg',
    orbitRadius: 290,
    angle: 225,
    speed: 1.1,
  },
  {
    id: '7',
    name: 'David Kim',
    role: 'DevOps Engineer',
    relationship: 'Collaborator',
    caption: 'Kubernetes wizard who helped me deploy my first ML model. Made DevOps actually fun?!',
    imageUrl: '/images/people/david-kim.jpg',
    orbitRadius: 240,
    angle: 270,
  },
  {
    id: '8',
    name: 'Lisa Martinez',
    role: 'Tech Community Leader',
    relationship: 'Mentor',
    caption: 'Founded the local AI meetup where I found my people. A true community builder.',
    imageUrl: '/images/people/lisa-martinez.jpg',
    orbitRadius: 320,
    angle: 315,
    speed: 0.85,
  },
]

// Optional: Add your own center image
export const centerAvatarUrl = '/Portfolio.jpeg' // Your photo for the center

// Filter by category if needed
export const hallOfFameByCategory = {
  mentors: hallOfFameData.filter(p => p.relationship === 'Mentor'),
  collaborators: hallOfFameData.filter(p => p.relationship === 'Collaborator'),
  teammates: hallOfFameData.filter(p => p.relationship === 'Hackathon Teammate'),
  inspiring: hallOfFameData.filter(p => p.relationship === 'Inspiring Encounter'),
}
