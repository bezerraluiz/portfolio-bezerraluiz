import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = ["Java", "React.js", "JavaScript", "SQL", "Git"];

  const techStack = [
    {
      category: "Frontend",
      techs: [
        "React",
        "JavaScript/TypeScript",
        "Tailwind CSS",
        "Styled Components",
        "HTML/CSS",
      ],
      icon: "🎨",
    },
    {
      category: "Backend",
      techs: ["Node.js", "Java", "Spring Boot", "Maven", "Fastify"],
      icon: "⚙️",
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "Prisma"],
      icon: "🗄️",
    },
    {
      category: "DevOps",
      techs: ["Docker", "Git"],
      icon: "🚀",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvedor Full Stack
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 animate-slide-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Com mais de{" "}
                  <span className="text-primary font-semibold">
                    3 anos de experiência
                  </span>{" "}
                  no desenvolvimento de software, tenho me dedicado a criar
                  soluções web e mobile que atendem às necessidades reais dos
                  usuários.
                </p>

                <br />

                <p className="text-muted-foreground leading-relaxed text-lg">
                  Minha jornada começou com curiosidade sobre como as coisas
                  funcionam, e hoje trabalho com as principais tecnologias do
                  mercado, desde o frontend com{" "}
                  <span className="text-primary font-semibold">
                    React e TypeScript{" "}
                  </span>
                  até o backend com{" "}
                  <span className="text-primary font-semibold">
                    Node.js, Java e Spring
                  </span>
                  .
                </p>

                <br />

                <p className="text-muted-foreground leading-relaxed text-lg">
                  Acredito que a tecnologia deve servir às pessoas, por isso
                  sempre busco equilibrar inovação técnica com usabilidade e
                  performance, criando experiências que realmente agregam valor
                  aos negócios e usuários.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Competências Principais
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Stack Tecnológica
              </h3>

              <div className="grid gap-6">
                {techStack.map((stack, index) => (
                  <Card
                    key={index}
                    className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{stack.icon}</span>
                        <h4 className="font-semibold text-primary text-lg">
                          {stack.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.techs.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
