import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 to-background" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-medium mb-6 opacity-0 animate-fade-up">
            Full-Stack Developer
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 opacity-0 animate-fade-up stagger-1">
            Hi, I'm <span className="italic text-accent">Sameer Ali</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up stagger-2">
            I design and build exceptional websites and applications with
            meticulous attention to detail and a passion for pixel-perfect
            execution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-3">
            <a
              href="#projects"
              className="group px-8 py-4 bg-accent text-accent-foreground font-medium uppercase tracking-widest text-sm hover:bg-accent/90 transition-all duration-300 glow-emerald"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-transparent border border-border text-foreground font-medium uppercase tracking-widest text-sm hover:border-foreground transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 opacity-0 animate-fade-in stagger-5"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce-slow" />
      </a>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block" />
    </section>
  );
};

export default Hero;
