import { Badge } from "@/components/ui/badge"

interface TechCategory {
  name: string
  technologies: string[]
}

export function TechStack() {
  const techCategories: TechCategory[] = [
    {
      name: "Programming Languages",
      technologies: [
        "SQL",
        "R",
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "TensorFlow",
        "SciPy",
      ],
    },
    {
      name: "Data Engineering & ETL Tools",
      technologies: ["DBT", "Apache Airflow", "Talend", "Alteryx", "Azure Data Factory", "Databricks"],
    },
    {
      name: "Data Visualization & BI",
      technologies: ["Power BI", "Tableau", "AWS QuickSight", "Looker", "Excel", "Google Analytics"],
    },
    {
      name: "Databases & Cloud Platforms",
      technologies: ["AWS", "MySQL", "PostgreSQL", "Microsoft SQL Server", "Snowflake", "Google BigQuery"],
    },
  ]

  return (
    <section
      id="tech-stack"
      className="py-16 md:py-24 px-4 md:px-8 rounded-3xl bg-gradient-to-br from-[#2a3d66] to-[#4c86c6] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-white text-center">Tech Stack</h2>

      <div className="space-y-10 max-w-6xl mx-auto">
        {techCategories.map((category) => (
          <div key={category.name} className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-white/90">{category.name}</h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {category.technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-white/10 hover:bg-white/20 text-white border-0 py-2 px-4 text-sm md:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
