import { jobs, jobGroups } from '@/data/site'

export default function WorkPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Work</h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Experience, freelance, and research — one timeline.
        </p>
      </div>

      {jobGroups.map((group) => {
        const entries = jobs.filter((j) => j.kind === group.kind)
        if (entries.length === 0) return null
        return (
          <section key={group.kind}>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              {group.label}
            </h2>
            <ul className="divide-y divide-neutral-100 border-y border-neutral-100 dark:divide-neutral-800 dark:border-neutral-800">
              {entries.map((j) => (
                <li key={j.company + j.role} className="py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium">
                      {j.link ? (
                        <a
                          href={j.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {j.role}{' '}
                          <span className="text-neutral-400 dark:text-neutral-500">
                            @ {j.company}
                          </span>
                        </a>
                      ) : (
                        <>
                          {j.role}{' '}
                          <span className="text-neutral-400 dark:text-neutral-500">
                            @ {j.company}
                          </span>
                        </>
                      )}
                    </h3>
                    <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">
                      {j.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {j.location} — {j.summary}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
