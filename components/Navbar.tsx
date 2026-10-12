'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
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
          sachiv
        </Link>
        <div className="flex items-center gap-1">
          <ul className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            {links.map((l) => {
              const active =
                pathname === l.href || pathname.startsWith(l.href + '/')
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`transition-colors hover:text-black dark:hover:text-white ${
                      active ? 'text-black dark:text-white' : ''
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <span className="ml-2">
            <ThemeToggle />
          </span>
        </div>
      </nav>
    </header>
  )
}
