
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-primary/20 py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-3">João Silva</h3>
            <p className="text-muted-foreground text-sm">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-primary">Links Rápidos</h4>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projetos
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Habilidades
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-right md:text-right text-center">
            <h4 className="font-semibold mb-3 text-primary">Contato</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>joao.silva@email.com</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} João Silva. Todos os direitos reservados. 
            <span className="ml-2">Feito com ❤️ e muito ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
