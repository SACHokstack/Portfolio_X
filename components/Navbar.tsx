'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/work', label: 'work' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="py-8">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          yourname
        </Link>
        <ul className="flex items-center gap-4 text-sm text-neutral-500">
          {links.slice(1).map((l) => {
            const active =
              pathname === l.href || pathname.startsWith(l.href + '/')
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`transition-colors hover:text-black ${
                    active ? 'text-black' : ''
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
