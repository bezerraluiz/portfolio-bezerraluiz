import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const additionalSkills = [
    "Metodologias Ágeis (Scrum, Kanban)",
    "Arquitetura de Software",
    "Design Patterns",
    "API REST",
    "Micro-serviços",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Outros <span className="text-primary">Conhecimentos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="text-center">
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
      </div>
    </section>
  );
};

export default Skills;
