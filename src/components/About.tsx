import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre <span className="text-purple-600">Mim</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 mb-6 text-justify leading-relaxed">
              Sou um desenvolvedor Full Stack apaixonado por criar soluções
              digitais que resolvem problemas reais. Com experiência em
              desenvolvimento web e mobile, combino habilidades técnicas com uma
              mentalidade criativa para entregar produtos de alta qualidade.
            </p>{" "}
            <p className="text-gray-700 mb-8 text-justify leading-relaxed">
              Minha abordagem é sempre centrada no usuário, buscando criar
              interfaces intuitivas e agradáveis, enquanto mantenho um código
              limpo e bem estruturado nos bastidores. Estou sempre aprendendo e
              me adaptando às novas tecnologias para oferecer as melhores
              soluções possíveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/30 py-6"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center"
                >
                  Ver projetos
                </motion.a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg py-6"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center"
                >
                  Solicitar orçamento
                </motion.a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-purple-600 rounded-lg opacity-50 blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.6, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-white rounded-md p-6">
                  <motion.img
                    src="/lovable-uploads/profile.jpg"
                    alt="Profile"
                    className="rounded-md w-full h-auto shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
