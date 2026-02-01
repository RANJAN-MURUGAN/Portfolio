import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Automated Tomato Quality Classification Using Vision Transformers",
    description:
      "Developed an ML-based deep learning model to classify tomatoes into categories: ripe, unripe, old, and damaged. Improved agricultural sorting efficiency by replacing manual inspection with an automated classification pipeline.",
    image: "/projects/tomato-classification.png",
    tags: ["Python", "Vision Transformers", "Machine Learning", "Deep Learning"],
    link: null, // Add your deployed project link if available
    github: "https://github.com/RANJAN-MURUGAN", // Update with actual repo link when available
  },
  {
    title: "Impact of Car Features on Price and Profitability",
    description:
      "Analyzed how various car features influence pricing and profitability using statistical methods. Provided actionable insights to optimize feature offerings and pricing strategies for increased profitability.",
    image: "/projects/car-analysis.png",
    tags: ["Python", "Pandas", "Data Analysis", "Statistical Modeling"],
    link: null,
    github: "https://github.com/RANJAN-MURUGAN", // Update with actual repo link when available
  },
  {
    title: "Bank Loan Data Analysis",
    description:
      "Analyzed bank loan data during my internship at Trainity to determine key factors influencing loan approval and defaults. Provided business insights for marketing and product teams using SQL and Excel.",
    image: "/projects/bank-loan.png",
    tags: ["SQL", "Excel", "Power BI", "Business Intelligence"],
    link: null,
    github: "https://github.com/RANJAN-MURUGAN", // Update with actual repo link when available
  },
  {
    title: "ABC Call Reporting Automation",
    description:
      "Implemented a new reporting system using Excel Pivot Tables and VBA that reduced processing time by 50%. Streamlined data analysis workflows for faster business decision-making.",
    image: "/projects/ABC-Call.png",
    tags: ["Excel VBA", "Automation", "Data Processing", "Reporting"],
    link: null,
    github: "https://github.com/RANJAN-MURUGAN",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-10">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              drive insights.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of my data analysis and machine learning projects, from 
            automated classification systems to business intelligence solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="View project"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton asChild>
            <a 
              href="https://github.com/RANJAN-MURUGAN" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View More on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};