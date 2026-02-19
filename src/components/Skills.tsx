import { fetchSkills } from "@/api/portfolio";
import { highlights } from "@/constant/highlights";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { data: skillCategories = [], isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-charcoal-light/30 to-transparent" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          className={`max-w-2xl mb-16 lg:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium">
            Skills & <span className="italic">Technologies</span>
          </h2>
        </div>

        {/* Stats Highlights */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className={`p-6 bg-charcoal-light/50 border border-border text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-serif text-3xl lg:text-4xl text-accent">
                {item.value}
              </span>
              <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-12">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-6">
                  <div className="h-8 w-32 bg-charcoal-light/30 animate-pulse border-b border-border pb-4" />
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 12 }).map((_, j) => (
                      <div
                        key={j}
                        className="h-10 w-24 bg-charcoal-light/20 animate-pulse rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              ))
            : skillCategories.map((category, catIndex) => (
                <div
                  key={category.title}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${200 + catIndex * 150}ms` }}
                >
                  <h3 className="font-serif text-xl font-medium mb-6 text-foreground border-b border-border pb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`px-4 py-2 border border-border bg-charcoal-light/30 rounded-lg flex items-center gap-2 text-muted-foreground text-sm hover:border-accent hover:text-accent transition-all duration-300 cursor-default ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          transitionDelay: `${400 + catIndex * 100 + skillIndex * 30}ms`,
                        }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-5 h-5"
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
        </div>

        {/* Additional info */}
        <div
          className={`mt-16 p-8 bg-charcoal-light/50 border border-border transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm constantly learning and adapting to new technologies. Currently
            exploring <span className="text-accent">Web3</span>,{" "}
            <span className="text-accent">AI-powered interfaces</span>, and{" "}
            <span className="text-accent">modern full-stack architectures</span>{" "}
            to stay at the forefront of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
