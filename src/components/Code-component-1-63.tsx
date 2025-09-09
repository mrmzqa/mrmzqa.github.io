import { Github, Linkedin, Twitter, Facebook, Instagram, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/mrmzqa', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/mrmzqa', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/mrmzqa', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mrmzqa', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/mrmzqa', label: 'GitHub' },
  ];

  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          <div className="text-muted-foreground mb-4">
            <p>© {currentYear} <span className="text-foreground">Mohammed Rameez Portfolio</span>. All Rights Reserved</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by</span>
            <a 
              href="https://mrmzqa.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mrmzqa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}