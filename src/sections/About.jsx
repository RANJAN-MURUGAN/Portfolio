import { BarChart3, Database, Award, Brain } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Analysis",
    description:
      "Transforming raw data into actionable insights using SQL, Python, and visualization tools.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Building dashboards and reports that drive data-driven decision making.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Developing ML models for automation and intelligent classification systems.",
  },
  {
    icon: Award,
    title: "Problem Solving",
    description:
      "National and State-level quiz champion with a competitive edge in analytical thinking.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning data into
              <span className="font-serif italic font-normal text-white">
                {" "}
                meaningful stories.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Ranjan M, a dual-degree graduate in Computer Science and 
                Data Science from The American College, currently pursuing my 
                Master's in Computer Applications at PSNACET. Based in Madurai, 
                I combine strong analytical skills with software development expertise.
              </p>
              <p>
                My expertise spans across data analysis, SQL optimization, and 
                business intelligence. During my internship at Trainity, I reduced 
                reporting processing time by 50% through Excel automation and provided 
                critical insights that drove business decisions.
              </p>
              <p>
                I'm passionate about machine learning and automation — from building 
                vision transformer models for agricultural classification to analyzing 
                complex datasets for actionable insights. My competitive spirit, honed 
                through multiple quiz championships, drives me to excel in every challenge.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe that great data analysis is not just about numbers — 
                it's about uncovering insights that empower better decisions and 
                create real impact."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};