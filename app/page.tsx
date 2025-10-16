import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'
import HallOfFame from '@/components/HallOfFame'
import { hallOfFameData, centerAvatarUrl } from '@/data/hallOfFameData'

export default function Home() {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <HallOfFame people={hallOfFameData} centerImageUrl={centerAvatarUrl} />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
