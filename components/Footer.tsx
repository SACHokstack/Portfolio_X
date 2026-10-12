import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-8 text-sm text-neutral-500">
      <div className="flex items-center justify-between">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <div className="flex gap-4">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
