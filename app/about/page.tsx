import { site, skills, achievements } from '@/data/site'

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          {site.role} · {site.location}
        </p>
      </div>
      <p className="leading-7 text-neutral-700 dark:text-neutral-300">{site.bio}</p>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {site.stats.map((s) => (
          <div key={s.label}>
            <div className="text-lg font-semibold">{s.value}</div>
            <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Stack
        </h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {skills.map((s) => (
            <li
              key={s.name}
              title={s.category}
              className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
            >
              {s.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Achievements
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-300">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <p className="text-[15px] text-neutral-500 dark:text-neutral-400">
        Contact →{' '}
        <a
          href={`mailto:${site.email}`}
          className="text-black underline dark:text-white"
        >
          {site.email}
        </a>
      </p>
    </div>
  )
}
