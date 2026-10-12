import Link from 'next/link'
import { site, posts, projects, jobs } from '@/data/site'

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="mb-4 flex items-baseline justify-between">
      <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
        {title}
      </h2>
      <Link
        href={href}
        className="text-sm text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
      >
        view all →
      </Link>
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Summary */}
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">{site.name}</h1>
        <p className="mt-1 text-neutral-500 dark:text-neutral-400">
          {site.role} · {site.location}
        </p>
        <p className="mt-6 leading-7 text-neutral-700 dark:text-neutral-300">
          {site.bio}
        </p>
        <p className="mt-4 leading-7 text-neutral-500 dark:text-neutral-400">
          {site.tagline} <span className="animate-pulse text-black dark:text-white">▊</span>
        </p>
        <div className="mt-4 flex gap-4 text-sm">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 underline decoration-neutral-300 underline-offset-4 hover:text-black dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* Work preview */}
      <section>
        <SectionHeader title="Work" href="/work" />
        <ul className="divide-y divide-neutral-100 border-y border-neutral-100 dark:divide-neutral-800 dark:border-neutral-800">
          {jobs.slice(0, 4).map((j) => (
            <li key={j.company + j.role} className="flex items-baseline justify-between gap-4 py-3">
              <span className="text-[15px]">
                {j.role}{' '}
                <span className="text-neutral-400 dark:text-neutral-500">@ {j.company}</span>
              </span>
              <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">
                {j.period}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects preview */}
      <section>
        <SectionHeader title="Projects" href="/projects" />
        <ul className="space-y-4">
          {projects.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <Link href="/projects" className="group block">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium group-hover:underline">{p.title}</span>
                  <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">
                    {p.year}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-[15px] text-neutral-500 dark:text-neutral-400">
                  {p.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Writing preview */}
      {posts.length > 0 && (
        <section>
          <SectionHeader title="Writing" href="/blog" />
          <ul className="space-y-3">
            {posts.slice(0, 5).map((post) => (
              <li key={post.slug}>
                <Link
                  href="/blog"
                  className="group flex items-baseline justify-between gap-4"
                >
                  <span className="group-hover:underline">{post.title}</span>
                  <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">
                    {post.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="text-[15px] text-neutral-500 dark:text-neutral-400">
        <p>
          More about me →{' '}
          <Link
            href="/about"
            className="text-black underline dark:text-white"
          >
            about
          </Link>
          {' · '}Get in touch →{' '}
          <a
            href={`mailto:${site.email}`}
            className="text-black underline dark:text-white"
          >
            email
          </a>
        </p>
      </section>
    </div>
  )
}
