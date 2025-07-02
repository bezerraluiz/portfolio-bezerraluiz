import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
              👋 Olá Dev, eu sou
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-gradient">Luiz Antônio Bezerra</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Todo sistema reflete quem o constrói
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/joaosilva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/joaosilva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:joao.silva@email.com"
              className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
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
