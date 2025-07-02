
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    "Desenvolvimento Full Stack",
    "Arquitetura de Software",
    "Liderança Técnica",
    "Metodologias Ágeis",
    "Comunicação Efetiva",
    "Resolução de Problemas"
  ];

  const techStack = [
    { category: "Frontend", techs: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", techs: ["Node.js", "Java", "Spring Boot", "Express"] },
    { category: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
    { category: "DevOps", techs: ["Docker", "AWS", "CI/CD", "Git"] }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvedor apaixonado por tecnologia e inovação, com foco em criar soluções que fazem a diferença
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <div className="space-y-6 animate-slide-in">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Com mais de <span className="text-primary font-semibold">5 anos de experiência</span> no desenvolvimento de software, 
                  tenho me dedicado a criar soluções web robustas e escaláveis que atendem às necessidades reais dos usuários.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje trabalho com as principais 
                  tecnologias do mercado, desde o frontend com <span className="text-primary font-semibold">React e TypeScript</span> 
                  até o backend com <span className="text-primary font-semibold">Node.js, Java e Spring</span>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Acredito que a tecnologia deve servir às pessoas, por isso sempre busco equilibrar inovação técnica com 
                  usabilidade e performance, criando experiências que realmente agregam valor aos negócios e usuários.
                </p>
              </div>

              {/* Soft Skills */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Competências Principais</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Tech Stack */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold mb-6 text-primary">Stack Tecnológica</h3>
              
              <div className="grid gap-4">
                {techStack.map((stack, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-primary mb-3">{stack.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {stack.techs.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Experience highlight */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projetos Entregues</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Entre aplicações web, APIs e sistemas complexos
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
