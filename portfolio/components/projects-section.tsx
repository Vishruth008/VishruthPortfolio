import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "NYC Parking Violation Analysis",
    description:
      "Engineered an automated pipeline with Airflow, Python, and AWS S3 to extract and stage 10M+ NYC parking violation records, integrating anomaly detection to reduce ingestion failures by 25%.",
    image: "https://nypost.com/wp-content/uploads/sites/2/2024/02/CARS2.jpg?quality=75&strip=all&w=744",
    github: "https://github.com/Vishruth008/ETLPipeline-ParkingViolations-SnowFlake",
  },
  {
    id: 2,
    title: "Crime Data Insights",
    description:
      "Processed and refined a 10K+ crime dataset using cleaning and preprocessing to ensure data integrity. Developed interactive Tableau dashboards to analyze trends across 50+ locations, identifying high-crime areas.",
    image:
      "https://www.voronoiapp.com/_next/image?url=https%3A%2F%2Fcdn.voronoiapp.com%2Fpublic%2Fimages%2Fvoronoi-The-Highest-Violent-Crime-Rate-by-US-State-20240723155553.webp&w=3840&q=85",
    github: "https://github.com/Vishruth008/Crime-Data-Insights-and-Reporting",
  },
  {
    id: 3,
    title: "Data Professional Insights Dashboard",
    description:
      "Implemented a Power BI dashboard to analyze KPIs and trends from a dataset of 630 data professionals. Analyzed multi-source data, refining pattern recognition across 30+ KPIs for actionable insights.",
    image: "https://i.redd.it/6fecb0tasiqd1.png",
    github: "https://github.com/Vishruth008/Data-Professional-Insights-Dashboard",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 md:px-8 rounded-3xl bg-gradient-to-br from-[#003366] to-[#1a1a1a] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-white text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} darkBackground={true} />
        ))}
      </div>
    </section>
  )
}
