import { projects } from '@/data/site'

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Selected work with links.
        </p>
      </div>
      <ul className="space-y-8">
        {projects.map((p) => (
          <li key={p.slug}>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium">{p.title}</h2>
              <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">
                {p.year}
              </span>
            </div>
            <p className="mt-1 text-[15px] text-neutral-500 dark:text-neutral-400">
              <span className="text-neutral-400 dark:text-neutral-500">
                {p.category} —{' '}
              </span>
              {p.description}
            </p>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {p.tech.join(' · ')}
            </p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-neutral-300 underline-offset-4 hover:text-black dark:decoration-neutral-700 dark:hover:text-white"
                >
                  github
                </a>
              )}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-neutral-300 underline-offset-4 hover:text-black dark:decoration-neutral-700 dark:hover:text-white"
                >
                  live
                </a>
              )}
              {p.extraLinks?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-neutral-300 underline-offset-4 hover:text-black dark:decoration-neutral-700 dark:hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        More →{' '}
        <a
          href="https://github.com/SACHokstack/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          github.com/SACHokstack
        </a>
      </p>
    </div>
  )
}
