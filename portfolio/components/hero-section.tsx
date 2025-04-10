import { Download, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full py-24 md:py-32 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Data.jpg-7Zel6h9dwkft6g3JtIDquaGlY8SvLs.jpeg"
          alt="Data visualization background"
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d]/80 to-[#1a73e8]/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Vishruth Venugopal
          </h1>
          <div className="space-y-3">
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">Data Engineer & Analyst</p>
            <p className="text-base md:text-lg text-white/80 drop-shadow-sm animate-fadeIn">
              Building Data-Driven Solutions for the Future.
            </p>

            {/* Northeastern University Badge */}
            <div className="flex justify-center mt-4">
              <Link
                href="https://www.northeastern.edu/"
                target="_blank"
                className="bg-white rounded-full p-1.5 shadow-md hover:scale-105 transition-all duration-300 group"
                title="Northeastern University"
              >
                <div className="flex items-center space-x-2">
                  <div className="relative w-8 h-8">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northeasternuniversity-5HfWrKpDGamn5U11yYMs09OZaIh6yn.png"
                      alt="Northeastern University"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-800 group-hover:text-[#d41b2c]">
                    Northeastern University
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 pt-2">
            <Link
              href="https://linkedin.com/in/vishruthtv"
              target="_blank"
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 hover:text-[#1a73e8] transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Vishruth008"
              target="_blank"
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 hover:text-[#1a73e8] transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>

          <div className="pt-6">
            <a
              href="/Vishruth_Venugopal_Resume.pdf"
              target="_blank"
              download="Vishruth_Venugopal_Resume.pdf"
              className="inline-block bg-white text-[#1a73e8] hover:bg-[#1a73e8] hover:text-white text-lg px-8 py-2.5 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              rel="noreferrer"
            >
              <span className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Résumé
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
