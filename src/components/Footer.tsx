
import React from 'react';
import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contato', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/joaosilva', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/joaosilva', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:joao.silva@email.com', label: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-primary/20 py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">João Silva</h3>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4 text-primary text-lg">Links Rápidos</h4>
            <div className="flex justify-center space-x-6 text-sm">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-right md:text-right text-center">
            <h4 className="font-semibold mb-4 text-primary text-lg">Contato</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>joao.silva@email.com</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} João Silva. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-2 flex items-center justify-center gap-1">
            Feito com <Heart size={16} className="text-primary" fill="currentColor" /> e muito <Coffee size={16} className="text-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
