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
  title: "Minh Chi Diep | Portfolio",
  description: "Portfolio of Minh Chi Diep"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
        <Toaster />
      </body>
    </html>
  )
}
