import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "Email",
      value: "luizantoniopcb@gmail.com",
      link: "mailto:luizantoniopcb@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-600" />,
      title: "Telefone",
      value: "+55 (48) 99653-3779",
      link: "https://api.whatsapp.com/send?phone=5548996533779&text=Fala%2C%20Luiz!%20Vim%20do%20teu%20portif%C3%B3lio%2C%20quero%20trabalhar%20contigo!",
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: "Localização",
      value: "Criciúma - SC, Brasil",
      link: "https://maps.google.com/?q=Criciuma+Brasil",
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section id="contact" className="section bg-purple-50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-purple-600">Contato</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-purple-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="max-w-2xl mx-auto text-gray-700">
            Tem um projeto em mente? Entre em contato para discutirmos sua ideia
            e transformá-la em realidade.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="space-y-6 mb-10" variants={containerVariants}>
            {contactInfo.map((info) => (
              <motion.div key={info.title} variants={itemVariants}>
                <Card className="card-hover group">
                  <CardContent className="flex items-center p-6 space-x-4">
                    <motion.div
                      className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {info.icon}
                    </motion.div>{" "}
                    <div className="min-w-0">
                      <h4 className="font-semibold text-lg mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-purple-600 hover:text-purple-700 hover:underline transition-colors break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-purple-600 to-purple-500 p-6 rounded-lg text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
              y: -3,
            }}
          >
            <h4 className="text-xl font-semibold mb-3">
              Vamos trabalhar juntos!
            </h4>
            <p className="mb-5">
              Estou disponível para projetos freelance, desenvolvimento completo
              ou consultorias.
            </p>
            <motion.div>
              <Button
                asChild
                variant="outline"
                className="border-white text-purple-600 hover:bg-purple-600 hover:text-white transition-colors py-6 px-6 w-full sm:w-auto"
              >
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5548996533779&text=Fala%2C%20Luiz!%20Vim%20do%20teu%20portif%C3%B3lio%2C%20quero%20trabalhar%20contigo!"
                >
                  Solicitar orçamento
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
