import { site, skills } from '@/data/site'

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
      <div className="flex gap-6 text-sm">
        {site.stats.map((s) => (
          <div key={s.label}>
            <div className="text-lg font-semibold">{s.value}</div>
            <div className="text-neutral-500 dark:text-neutral-400">{s.label}</div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Focus
        </h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {skills.map((s) => (
            <li
              key={s.name}
              className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
            >
              {s.name}
            </li>
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
