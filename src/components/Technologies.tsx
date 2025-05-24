import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
  category: string;
}

const Technologies = () => {
  const technologies: Technology[] = [
    // Frontend
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      category: "Frontend",
    },
    {
      name: "Styled Components",
      icon: "https://cdn.simpleicons.org/styledcomponents/DB7093",
      category: "Frontend",
    },

    // Backend
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "Backend",
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      category: "Backend",
    },
    {
      name: "Maven",
      icon: "https://cdn.simpleicons.org/apachemaven/C71A36",
      category: "Backend",
    },

    // Database
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Database",
    },
    {
      name: "Supabase",
      icon: "https://cdn.simpleicons.org/supabase/3ECF8E",
      category: "Database",
    },

    // DevOps
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "DevOps",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "DevOps",
    },
  ];

  const categories = ["Frontend", "Backend", "Database", "DevOps"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="technologies" className="section bg-purple-50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Minhas <span className="text-purple-600">Tecnologias</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-purple-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="max-w-2xl mx-auto text-gray-700">
            Estou sempre me atualizando com as mais recentes tecnologias para
            oferecer as melhores soluções para cada projeto.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              className="mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {category}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <motion.div key={tech.name} variants={itemVariants}>
                      {" "}
                      <Card className="card-hover overflow-hidden border border-purple-100 group transition-all duration-300 h-32">
                        <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                          <motion.img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          />
                          <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300 text-center">
                            {tech.name}
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
