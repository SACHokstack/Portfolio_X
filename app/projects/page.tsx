import { projects } from '@/data/site'

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-neutral-500">Selected work. Title + one line.</p>
      </div>
      <ul className="space-y-6">
        {projects.map((p) => (
          <li key={p.slug}>
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">{p.title}</h2>
              <span className="text-sm text-neutral-400">{p.year}</span>
            </div>
            <p className="mt-1 text-[15px] text-neutral-500">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
