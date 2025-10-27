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
    name: 'Sidharth',
    role: 'Teammate',
    relationship: 'Mentor',
    caption: 'Winning together at Hackathons and beyond!',
    imageUrl: '/image.png', // Replace with actual paths
    orbitRadius: 200,
    angle: 0,
    speed: 1.2,
  },
  {
    id: '2',
    name: 'Venkat Muthu',
    role: 'Computational Biologist@Yale',
    relationship: 'Mentor',
    caption: 'Guided me through the maze of research and life.',
    imageUrl: '/image copy.png',
    orbitRadius: 280,
    angle: 45,
    speed: 0.9,
  },
  {
    id: '3',
    name: 'Dr. Amit Agarwal',
    role: 'Professor of Computer Science at Amrita Vidhyapeetham',
    relationship: 'Academic Advisor',
    caption: 'Did Research Project unser his guidance.',
    imageUrl: '/image copy 4.png',
    orbitRadius: 220,
    angle: 90,
  },
  {
    id: '4',
    name: 'Vincent Challerie',
    role: 'FOunder@SpineDAO',
    relationship: 'Founder',
    caption: 'Collaborated on SpineDAO project with his guidance.',
    imageUrl: '/image copy 3.png',
    orbitRadius: 310,
    angle: 135,
    speed: 0.8,
  },
  {
    id: '5',
    name: 'Nassim dheouche',
    role: 'Lead Developer@SpineDAO',
    relationship: 'Inspiring Encounter',
    caption: 'Coached and supported me for our contribution to SpineDAO.',
    imageUrl: '/image copy 2.png',
    orbitRadius: 250,
    angle: 180,
  },
  {
    id: '6',
    name: 'Erik van Winkle',
    role: 'Organizer BIOPROTOCOL',
    relationship: 'Workshop Instructor',
    caption: 'Helped me all sorts related to  BioProtocol. Great man!',
    imageUrl: '/image copy 5.png',
    orbitRadius: 290,
    angle: 225,
    speed: 1.1,
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
