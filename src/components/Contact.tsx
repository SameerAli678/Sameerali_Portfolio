import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "sonner";

// ===================================
// WhatsApp Icon Component
// ===================================
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.877 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.032c0 2.12.556 4.189 1.61 6.067L0 24l6.105-1.601a11.847 11.847 0 005.94 1.585h.005c6.637 0 12.032-5.396 12.036-12.032a11.842 11.842 0 00-3.64-8.504z" />
  </svg>
);

// ===================================
// Contact data
// ===================================
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sameeralidev678@gmail.com",
    href: "mailto:sameeralidev678@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 3151265238",
    href: "tel:+923151265238",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+92 3151265238",
    href: "https://wa.me/923151265238",
  },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-charcoal-light/30"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-8 leading-tight">
              Let's create something
              <br />
              <span className="italic text-accent">extraordinary</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-charcoal flex items-center justify-center border border-border">
                    <item.icon
                      className="w-5 h-5 text-accent"
                      target="_blank"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <a href={item.href} className="text-foreground">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-muted-foreground uppercase tracking-wider mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted-foreground uppercase tracking-wider mb-3"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-muted-foreground uppercase tracking-wider mb-3"
                >
                  Phone Number
                </label>
                <PhoneInput
                  country={"pk"}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  containerClass="phone-input-container"
                  inputClass="!w-full !bg-transparent !border-0 !border-b !border-border !py-4 !h-auto !text-foreground !placeholder:text-muted-foreground/50 focus:!outline-none focus:!border-accent !transition-colors !duration-300 !rounded-none !pl-12"
                  buttonClass="!bg-transparent !border-0 !border-b !border-border !rounded-none"
                  dropdownClass="!bg-charcoal !text-foreground !border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted-foreground uppercase tracking-wider mb-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-medium uppercase tracking-widest text-sm hover:bg-accent/90 transition-all duration-300 group glow-emerald mt-4 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
