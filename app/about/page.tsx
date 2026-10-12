import { site } from '@/data/site'

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>
      <p className="leading-7 text-neutral-700">{site.bio}</p>
      <p className="leading-7 text-neutral-500">
        Replace this with 2–3 short paragraphs: background, what you&apos;re
        good at, what you&apos;re looking for. Keep it single-scroll — no
        animations, no cards.
      </p>
    </div>
  )
}
