import { Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  // { icon: Github, href: "https://github.com/SameerAli678", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sameer-ali-frontend-developer/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/sameer_ali_frontend_developer/",
    label: "Instagram",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#home"
            className="font-serif text-2xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-300"
          >
            Sameer Ali<span className="text-accent">.</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm order-3 md:order-2">
            © {currentYear} Sameer Ali. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 order-2 md:order-3">
            {socialLinks.map((link) => (
              <a
                target="_blank"
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
