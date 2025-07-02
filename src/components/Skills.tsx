
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 95, description: "Desenvolvimento de SPAs e aplicações server-side" },
        { name: "TypeScript", level: 90, description: "Tipagem estática e desenvolvimento escalável" },
        { name: "Tailwind CSS", level: 88, description: "Design responsivo e componentes reutilizáveis" },
        { name: "Vue.js", level: 75, description: "Framework progressivo para interfaces modernas" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 92, description: "APIs RESTful e aplicações em tempo real" },
        { name: "Java/Spring", level: 88, description: "Aplicações enterprise e microserviços" },
        { name: "Python/Django", level: 80, description: "Desenvolvimento rápido e análise de dados" },
        { name: "PHP/Laravel", level: 75, description: "Desenvolvimento web tradicional e APIs" }
      ]
    },
    {
      title: "Banco de Dados",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 90, description: "Banco relacional robusto e performático" },
        { name: "MongoDB", level: 85, description: "NoSQL para dados não estruturados" },
        { name: "Redis", level: 80, description: "Cache em memória e sessões" },
        { name: "MySQL", level: 88, description: "Banco relacional tradicional" }
      ]
    },
    {
      title: "DevOps & Ferramentas",
      icon: "🚀",
      skills: [
        { name: "Docker", level: 85, description: "Containerização e deploy consistente" },
        { name: "AWS/Cloud", level: 80, description: "Infraestrutura em nuvem escalável" },
        { name: "Git/GitHub", level: 95, description: "Controle de versão e colaboração" },
        { name: "CI/CD", level: 78, description: "Automação de deploy e testes" }
      ]
    }
  ];

  const additionalSkills = [
    "Metodologias Ágeis (Scrum, Kanban)",
    "Testes Automatizados (Jest, Cypress)",
    "Arquitetura de Software",
    "Design Patterns",
    "API REST e GraphQL",
    "WebSockets e Real-time",
    "Micro-serviços",
    "Performance Optimization"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Minhas <span className="text-primary">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-semibold text-primary">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">{skill.name}</span>
                        <span className="text-sm text-primary font-bold bg-primary/10 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Competências <span className="text-primary">Adicionais</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground font-medium">Anos de Experiência</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground font-medium">Tecnologias Dominadas</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground font-medium">Dedicação aos Projetos</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
