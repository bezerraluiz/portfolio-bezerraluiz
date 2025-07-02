import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "APA São Ludgero",
      description:
        "Sistema web desenvolvido no meu 4º semestre da faculdade para a ONG APA Sâo Ludgero, com funcionalidades de cadastro de animais, adoção e doações.",
      image: "./img-projects/adopet.png",
      technologies: ["React.js", "Java", "PostgreSQL", "Spring"],
      githubUrl: "https://github.com/arturoburigo/Adopet",
      liveUrl: "https://www.apasaoludgero.com.br/home",
      featured: true,
    },
    {
      id: 2,
      title: "A Cura D'Alma e Cigano Vladimir",
      description:
        "Landing Page com intuito de apresentar a taróloga que faz as consultas. Apresenta os cards, cada um sendo uma consulta, com título, descrição e valor, apresenta também suas redes sociais linkadas.",
      image: "./img-projects/curadalmaciganovladimir.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/bezerraluiz/curadalma-ciganovladimir",
      liveUrl: "https://curadalmaciganovladimir.com/",
      featured: false,
    },
    {
      id: 3,
      title: "Doski Gi Tattoo Portfólio",
      description:
        "Landing Page de portfólio para a tatuadora Doski Gi, com apresentação dos trabalhos, informações de contato e redes sociais.",
      image: "./img-projects/doskigiportfolio.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/bezerraluiz/doski.gi-portfolio",
      liveUrl: "https://doskigitattoo.netlify.app/",
      featured: false,
    },
    {
      id: 4,
      title: "Lua de Tarot",
      description:
        "Landing Page para Lua de Tarot, com apresentação dos serviços, depoimentos e informações de contato.",
      image: "./img-projects/luadetarot.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/bezerraluiz/lua-de-tarot",
      liveUrl: "https://luadetarot.com/",
      featured: false,
    },
    {
      id: 5,
      title: "HBL Ofertas - Frontend",
      description:
        "Sistema web de ofertas e promoções, com funcionalidades de cadastro de produtos e gerenciamento de ofertas.",
      image: "./img-projects/hblofertas.jpg",
      technologies: [
        "React.js",
        "JavaScript",
        "Next.js",
        "CSS",
        "HTML",
        "Styled Components",
      ],
      githubUrl: "https://github.com/bezerraluiz/hbl-ofertas-frontend",
      liveUrl: "https://hblofertas.com.br/",
      featured: false,
    },
    {
      id: 6,
      title: "HBL Ofertas - Backend",
      description:
        "Backend para o CRUD completo do sistema com conexão com Google Drive para salvamento das imagens.",
      image: "./img-projects/diagram.png",
      technologies: ["Node.js", "PostgreSQL", "Fastify", "TypeScript"],
      githubUrl: "https://github.com/bezerraluiz/hbl-ofertas-backend",
      liveUrl: "",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const ProjectCard = ({
    project,
    featured = false,
  }: {
    project: any;
    featured?: boolean;
  }) => (
    <Card
      className={`group overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? "h-64" : "h-48"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-black"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github size={16} />
            </Button>
            {project.liveUrl && (
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open(project.liveUrl, "_blank")}
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
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
            >
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
          onClick={() => window.open(project.githubUrl, "_blank")}
        >
          <Github size={16} className="mr-2" />
          Código
        </Button>
        {project.liveUrl && (
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 flex-1"
            onClick={() => window.open(project.liveUrl, "_blank")}
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
            Uma seleção dos projetos que desenvolvi
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Projetos em Destaque
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Outros Projetos
          </h3>
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
            onClick={() =>
              window.open("https://github.com/bezerraluiz", "_blank")
            }
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
