
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado e dashboard analítico em tempo real.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      githubUrl: "https://github.com/joaosilva/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Sistema de gerenciamento de tarefas com colaboração em tempo real, notificações push e integração com calendário.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Spring Boot", "WebSocket", "Redis"],
      githubUrl: "https://github.com/joaosilva/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Dashboard interativo para análise de dados com gráficos dinâmicos, filtros avançados e exportação de relatórios.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "D3.js", "Python", "FastAPI", "MongoDB"],
      githubUrl: "https://github.com/joaosilva/analytics-dashboard",
      liveUrl: "https://analytics-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Social Media API",
      description: "API RESTful para rede social com autenticação JWT, upload de mídia, sistema de likes e comentários.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Security", "MySQL", "AWS S3", "JWT"],
      githubUrl: "https://github.com/joaosilva/social-api",
      liveUrl: null,
      featured: false
    },
    {
      id: 5,
      title: "Real Estate Portal",
      description: "Portal imobiliário com busca avançada, mapa interativo, sistema de favoritos e chat integrado.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps", "Socket.io"],
      githubUrl: "https://github.com/joaosilva/real-estate",
      liveUrl: "https://realestate-demo.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Aplicativo de acompanhamento fitness com métricas personalizadas, desafios e integração com wearables.",
      image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Chart.js", "Firebase"],
      githubUrl: "https://github.com/joaosilva/fitness-app",
      liveUrl: "https://fitness-demo.vercel.app",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, featured = false }: { project: any, featured?: boolean }) => (
    <Card className={`group overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl ${featured ? 'md:col-span-2' : ''}`}>
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${featured ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-black"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github size={16} />
            </Button>
            {project.liveUrl && (
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink size={16} />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
          onClick={() => window.open(project.githubUrl, '_blank')}
        >
          <Github size={16} className="mr-2" />
          Código
        </Button>
        {project.liveUrl && (
          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90 flex-1"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            Ver Projeto
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos projetos que desenvolvi, desde aplicações web completas até APIs robustas
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Projetos em Destaque</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Outros Projetos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
            onClick={() => window.open('https://github.com/joaosilva', '_blank')}
          >
            <Github size={20} className="mr-2" />
            Ver Mais no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
