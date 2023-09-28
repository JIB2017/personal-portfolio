import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Juan Ignacio Blacutt',
  description: 'Web Developer Portfolio',
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark-only",
    "og-url": "jib-portfolio.vercel.app",
    "og-image": "image",
    "og-type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-jib font-poppins">{children}</body>
    </html>
  )
}
