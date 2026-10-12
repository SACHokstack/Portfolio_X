import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import CursorPet from '@/components/CursorPet'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sachiv C — AI Engineer',
  description:
    'AI Engineer & Creative Technologist building practical medical and agentic systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <Providers>
          <div className="mx-auto max-w-2xl px-6">
            <Navbar />
            <main className="pb-24">{children}</main>
            <Footer />
          </div>
          <CursorPet />
        </Providers>
      </body>
    </html>
  )
}
