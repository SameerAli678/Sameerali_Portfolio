import { stats } from "@/constant/stats";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] bg-charcoal-light relative overflow-hidden">
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center">
                <span className="font-serif text-8xl text-accent/20">S</span>
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-accent/20 -z-10" />
            </div>
            {/* Experience badge */}
            <div className="absolute -right-6 -bottom-6 bg-accent text-accent-foreground p-6 lg:p-8">
              <span className="font-serif text-4xl lg:text-5xl font-medium">
                3+
              </span>
              <p className="text-sm uppercase tracking-wider mt-1">Years</p>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm font-medium mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-8 leading-tight">
              Passionate about creating
              <br />
              <span className="italic text-accent">beautiful</span> interfaces
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm Sameer Ali, a front-end developer with a deep passion for
                creating elegant, user-centric web experiences. With over 3
                years of experience, I've had the privilege of working on
                diverse projects from e-commerce platforms to complex agency
                management systems.
              </p>
              <p>
                My approach combines technical expertise with an eye for design,
                ensuring every project not only functions flawlessly but also
                delivers an exceptional visual experience that captivates users.
              </p>
            </div>

            {/* WakaTime Badge */}
            <div className="mt-10 flex flex-col items-start gap-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Verified Coding Activity
              </p>
              <a
                href="https://wakatime.com/@7be8d183-ea89-4ca3-8021-14b420a37351"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-4 py-3 bg-charcoal-light/30 border border-border hover:border-accent/50 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <img
                    src="https://wakatime.com/badge/user/7be8d183-ea89-4ca3-8021-14b420a37351.svg"
                    alt="WakaTime stats"
                    className="h-5 filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>

                <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-accent transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <span className="font-serif text-3xl lg:text-4xl text-foreground">
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
