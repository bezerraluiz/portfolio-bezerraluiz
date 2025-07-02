
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              👋 Olá, eu sou
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">João Silva</span>
            <br />
            <span className="text-foreground">Desenvolvedor</span>
            <br />
            <span className="text-primary">Full Stack</span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Especializado em criar experiências web modernas e escaláveis com 
            <span className="text-primary font-medium"> React</span>, 
            <span className="text-primary font-medium"> Node.js</span>, 
            <span className="text-primary font-medium"> Java</span> e 
            <span className="text-primary font-medium"> Spring</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
              onClick={() => scrollToSection('projects')}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg font-medium"
              onClick={() => scrollToSection('contact')}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Tecnologias</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-primary hover:text-primary/80 transition-colors"
            aria-label="Scroll para próxima seção"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
