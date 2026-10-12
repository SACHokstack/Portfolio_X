import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Name — Engineer',
  description: 'Minimal portfolio. Summary, work, projects, and writing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-neutral-900 antialiased`}>
        <div className="mx-auto max-w-2xl px-6">
          <Navbar />
          <main className="pb-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
