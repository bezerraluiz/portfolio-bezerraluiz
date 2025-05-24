import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
  secondSourceUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "HBL Ofertas",
      description:
        "Uma plataforma estilo vitrine permitindo que os usuários encontrem ofertas e promoções de produtos da loja. Possui painel de administrador com gestão completa dos produtos.",
      image: "./hblofertas.jpg",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Fastify",
        "Styled Components",
      ],
      liveUrl: "https://hblofertas.com.br/",
      sourceUrl: "https://github.com/bezerraluiz/hbl-ofertas-frontend",
      secondSourceUrl: "https://github.com/bezerraluiz/hbl-ofertas-backend",
    },
    {
      title: "DoskiGiTattoo",
      description:
        "Portifólio online para uma tatuadora, apresentando trabalhos anteriores, informações sobre o agendamento e cuidados.",
      image: "./doskigitattoo.jpg",
      technologies: ["HTML", "CSS"],
      liveUrl: "https://doskigitattoo.netlify.app/",
      sourceUrl: "https://github.com/bezerraluiz/doski.gi-portfolio",
    },
    {
      title: "Lua de Tarot",
      description:
        "Sistema como vitrine para as consultas de tarot, mostrando as opções disponíveis, informações e valores e botão de agendamento.",
      image: "./luadetarot.jpg",
      technologies: ["HTML", "CSS"],
      liveUrl: "https://luadetarot.com/",
      sourceUrl: "https://github.com/bezerraluiz/lua-de-tarot",
    },
    {
      title: "A Cura D`Alma e Cigano Vladimir",
      description:
        "Sistema como vitrine para as consultas de tarot, mostrando as opções disponíveis, informações e valores e botão de agendamento.",
      image: "./acuradalmaeciganovladimir.jpg",
      technologies: ["HTML", "CSS", "JS", "TS"],
      liveUrl: "https://curadalmaciganovladimir.com/",
      sourceUrl: "https://github.com/bezerraluiz/curadalma-ciganovladimir",
    },
    {
      title: "Em breve...",
      description: "Em breve terei mais projetos para mostrar, fique ligado!",
      image: "./embreve.jpg",
      technologies: [],
      liveUrl: "",
      sourceUrl: "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="projects" className="section bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meus <span className="text-purple-600">Projetos</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-purple-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="max-w-2xl mx-auto text-gray-700">
            Confira alguns dos principais projetos que desenvolvi e estão
            atualmente em produção.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={projectVariants}>
              <Card className="overflow-hidden card-hover border border-purple-100 h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between mt-auto">
                  {" "}
                  {project.sourceUrl && (
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                      <Button
                        asChild
                        variant="outline"
                        className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                      >
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </a>
                      </Button>
                      {project.secondSourceUrl && (
                        <Button
                          asChild
                          variant="outline"
                          className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                        >
                          <a
                            href={project.secondSourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Código
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                  {project.liveUrl && (
                    <Button
                      asChild
                      className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Projeto
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
