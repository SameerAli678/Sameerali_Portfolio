import { fetchProjects } from "@/api/portfolio";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-charcoal-light/30"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 lg:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium">
            Featured <span className="italic">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] bg-charcoal-light/20 animate-pulse"
                />
              ))
            : projects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative transition-all duration-700 block ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative aspect-[4/3] bg-charcoal overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />

                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 bg-accent/90 flex items-center justify-center transition-all duration-500 ${
                        hoveredId === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="w-14 h-14 rounded-full bg-accent-foreground flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mt-5">
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-xl lg:text-2xl font-medium mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs uppercase tracking-wider border border-border text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href="https://github.com/sameerali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-medium uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-all duration-300 group"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
