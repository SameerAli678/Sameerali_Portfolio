import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "skills", "contact"];

const ScrollNavigator = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="group flex items-center gap-3"
          aria-label={`Navigate to ${section}`}
        >
          {/* Label */}
          <span
            className={`text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              activeSection === section
                ? "text-accent"
                : "text-muted-foreground"
            }`}
          >
            {section}
          </span>

          {/* Dot */}
          <span
            className={`block w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-accent scale-150"
                : "bg-muted-foreground/50 group-hover:bg-accent"
            }`}
          />
        </a>
      ))}

      {/* Connecting line */}
      <div className="absolute right-[3px] top-1 bottom-1 w-px bg-border -z-10" />
    </nav>
  );
};

export default ScrollNavigator;
