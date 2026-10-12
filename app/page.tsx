import Link from 'next/link'
import { site, posts, projects, jobs } from '@/data/site'

function SectionHeader({
  title,
  href,
}: {
  title: string
  href: string
}) {
  return (
    <div className="mb-4 flex items-baseline justify-between">
      <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-400">
        {title}
      </h2>
      <Link href={href} className="text-sm text-neutral-500 hover:text-black">
        view all →
      </Link>
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Summary — the only thing most visitors read */}
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">{site.name}</h1>
        <p className="mt-1 text-neutral-500">{site.role} · {site.location}</p>
        <p className="mt-6 leading-7 text-neutral-700">{site.bio}</p>
        <p className="mt-4 leading-7 text-neutral-700">{site.tagline}</p>
      </section>

      {/* Work preview — single scroll, links out to full page */}
      <section>
        <SectionHeader title="Work" href="/work" />
        <ul className="divide-y divide-neutral-100 border-y border-neutral-100">
          {jobs.slice(0, 3).map((j) => (
            <li key={j.company} className="flex items-baseline justify-between py-3">
              <span className="text-[15px]">
                {j.role} <span className="text-neutral-400">@ {j.company}</span>
              </span>
              <span className="text-sm text-neutral-400">{j.period}</span>
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
                <div className="flex items-baseline justify-between">
                  <span className="font-medium group-hover:underline">
                    {p.title}
                  </span>
                  <span className="text-sm text-neutral-400">{p.year}</span>
                </div>
                <p className="mt-1 text-[15px] text-neutral-500">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Writing preview — leerob-style list */}
      <section>
        <SectionHeader title="Writing" href="/blog" />
        <ul className="space-y-3">
          {posts.slice(0, 5).map((post) => (
            <li key={post.slug}>
              <Link href="/blog" className="group flex items-baseline justify-between gap-4">
                <span className="group-hover:underline">{post.title}</span>
                <span className="shrink-0 text-sm text-neutral-400">{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-[15px] text-neutral-500">
        <p>
          More about me → <Link href="/about" className="text-black underline">about</Link>
          {' · '}
          Get in touch → <a href={`mailto:${site.email}`} className="text-black underline">email</a>
        </p>
      </section>
    </div>
  )
}
