import './globals.css'
import type { Metadata } from 'next'
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from '@/components/CookieBanner';


export const metadata: Metadata = {
  title: 'Juan Ignacio Blacutt',
  description: 'Web Developer Portfolio',
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter-image": "https://i.postimg.cc/DyK3Nw4G/Portfolio-front.webp",
    "twitter-card": "summary-large-image",
    "og:url": "personal-portfolio-one-ashen.vercel.app",
    "og:image": "https://i.postimg.cc/DyK3Nw4G/Portfolio-front.webp",
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID ?? "error"}/>
      <body className="min-h-screen bg-jib font-poppins">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
