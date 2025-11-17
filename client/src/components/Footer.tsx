import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/MadhusudanDhakad', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/madhusudan-dhakad/', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://x.com/Madhusudan_444', label: 'Twitter' },
    { icon: Mail, url: 'mailto:msddhakad444@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 Madhusudan Narwadiya</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using MERN Stack
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
