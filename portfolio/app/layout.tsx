import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vishruth Venugopal | Data Engineer & Analyst",
  description:
    "Portfolio of Vishruth Venugopal, Data Engineer & Analyst showcasing projects and skills in data engineering, analysis, and visualization.",
  authors: [{ name: "Vishruth Venugopal" }],
  keywords: [
    "Data Engineer",
    "Data Analyst",
    "Portfolio",
    "Vishruth Venugopal",
    "Data Visualization",
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'