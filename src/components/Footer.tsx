import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-secondary">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl text-primary mb-6">Contact Me</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            Feel free to reach out through any of these platforms. I'd love to hear from you!
          </p>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          <p className="mt-12 text-muted-foreground text-lg">
            © 2026 Gauri G Menon. Made with love & pastel colors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
