import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'

// Inter - Clean modern sans-serif for space theme
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// Space Mono for technical elements
const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sachiv C — AI Engineer | Interactive Space Journey',
  description: 'AI Engineer & Creative Technologist specializing in intelligent systems and human-centered design. Embark on an immersive space-themed portfolio experience.',
  openGraph: {
    title: 'Sachiv C — AI Engineer',
    description: 'AI Engineer & Creative Technologist specializing in intelligent systems',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  )
}
