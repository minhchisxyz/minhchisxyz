import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import {Analytics} from "@vercel/analytics/next"
import {Metadata} from "next"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.mchisxyz.uk"),
  title: "Minh Chi Diep | Portfolio",
  description: "Portfolio of Minh Chi Diep - Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and skills.",
  alternates: {
    canonical: "https://portfolio.mchisxyz.uk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    "Minh Chi Diep", "Diệp Minh Chí", "Minh Chi", "Portfolio", "Full Stack Developer", "Web Developer", "Software Engineer",
    "React", "Next.js", "TypeScript", "JavaScript", "Java", "Python", "C++", "C#",
    "Spring Boot", "Node.js", "Django", "FastAPI", "Flask", ".NET",
    "Angular", "Tailwind CSS", "Bootstrap",
    "PostgreSQL", "MongoDB", "SQLite",
    "Machine Learning", "PyTorch", "TensorFlow", "scikit-learn", "pandas", "NumPy",
    "DevOps", "Docker", "Kubernetes", "Jenkins", "CI/CD",
    "Mobile Development", "Flutter", "Dart",
    "Gemini API",
    "Germany", "Vietnam", "Remote"
  ],
  openGraph: {
    title: "Minh Chi Diep | Portfolio",
    description: "Portfolio of Minh Chi Diep - Full Stack Developer",
    url: "https://portfolio.mchisxyz.uk",
    siteName: "Minh Chi Diep Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Chi Diep | Portfolio",
    description: "Portfolio of Minh Chi Diep - Full Stack Developer",
    images: ["/icon.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  authors: [{ name: "Minh Chi Diep", url: "https://portfolio.mchisxyz.uk" }],
  creator: "Minh Chi Diep",
  publisher: "Minh Chi Diep",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Minh Chi Diep',
      url: 'https://portfolio.mchisxyz.uk',
      sameAs: [
        "https://github.com/minhchisxyz",
        "https://www.linkedin.com/in/diepminhchi/",
        "https://www.facebook.com/minhchisxyz"
      ],
      jobTitle: 'Full Stack Developer',
      telephone: '+4917680676239'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Minh Chi Diep Portfolio',
      url: 'https://portfolio.mchisxyz.uk',
    }
  ]

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics/>
        <Toaster />
      </body>
    </html>
  )
}
