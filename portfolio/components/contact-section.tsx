import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-br from-[#2b2b2b] to-[#1e2a3a] rounded-3xl p-8 md:p-16 text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-white text-center">Get In Touch</h2>
      <div className="flex flex-col items-center gap-8">
        <p className="text-base md:text-xl text-white/80 max-w-2xl text-center">
          Feel free to reach out for opportunities, collaborations, or feedback.
        </p>
        <div className="flex gap-6 justify-center">
          <Link href="mailto:teluguvenugopal.v@northeastern.edu">
            <Button
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Email me"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/vishruthtv" target="_blank">
            <Button
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
