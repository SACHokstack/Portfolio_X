import { jobs } from '@/data/site'

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Work</h1>
        <p className="mt-2 text-neutral-500">Experience, one line per role.</p>
      </div>
      <ul className="divide-y divide-neutral-100 border-y border-neutral-100">
        {jobs.map((j) => (
          <li key={j.company} className="py-5">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">
                {j.role} <span className="text-neutral-400">@ {j.company}</span>
              </h2>
              <span className="text-sm text-neutral-400">{j.period}</span>
            </div>
            <p className="mt-1 text-sm text-neutral-500">
              {j.location} — {j.summary}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
