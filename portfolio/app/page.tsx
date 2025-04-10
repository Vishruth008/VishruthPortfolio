import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { TechStack } from "@/components/tech-stack"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <HeroSection />
      <div className="container mx-auto py-16 md:py-24 space-y-16 md:space-y-24">
        <ProjectsSection />
        <TechStack />
        <ContactSection />
      </div>
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Vishruth Venugopal. All rights reserved.</p>
      </footer>
    </main>
  )
}
