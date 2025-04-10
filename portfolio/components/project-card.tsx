import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  github: string
}

interface ProjectCardProps {
  project: Project
  darkBackground?: boolean
}

export function ProjectCard({ project, darkBackground = false }: ProjectCardProps) {
  return (
    <Card
      className={`overflow-hidden flex flex-col h-full border-0 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${
        darkBackground
          ? "bg-white/10 backdrop-blur-sm hover:bg-white/15"
          : "border-[#3A5199]/20 hover:bg-gray-50 dark:hover:bg-gray-800"
      }`}
    >
      <div className="relative aspect-video">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover rounded-t-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className={`text-xl font-semibold mb-3 ${darkBackground ? "text-white" : "text-[#3A5199]"}`}>
          {project.title}
        </h3>
        <p className={`${darkBackground ? "text-gray-200" : "text-gray-600 dark:text-gray-300"} text-base md:text-lg`}>
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={project.github} target="_blank">
          <Button
            variant={darkBackground ? "default" : "outline"}
            className={`${
              darkBackground
                ? "bg-white/20 text-white hover:bg-white/30"
                : "text-[#3A5199] border-[#3A5199]/30 hover:bg-[#3A5199]/10"
            } hover:scale-105 transition-all duration-300`}
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
