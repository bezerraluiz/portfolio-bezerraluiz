import { Github, Linkedin, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { text: "Sobre", href: "#about" },
    { text: "Tecnologias", href: "#technologies" },
    { text: "Projetos", href: "#projects" },
    { text: "Contato", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/bezerraluiz",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/luiz-apc-bezerra/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/dev_bezerra.la/",
      label: "Instagram",
    },
    {
      icon: <FaTiktok className="h-5 w-5" />,
      href: "https://www.tiktok.com/@dev_bezerra.la",
      label: "TikTok",
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: "https://www.youtube.com/@devbezerrala",
      label: "YouTube",
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-0">
            <motion.h3 className="text-2xl font-bold text-purple-400 mb-2">
              Bezerra<span className="text-white">Luiz</span>
            </motion.h3>
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Construindo soluções digitais que impressionam
            </motion.p>
          </motion.div>

          <motion.div
            className="flex space-x-4"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                aria-label={link.label}
                variants={itemVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 5, -5, 0],
                  backgroundColor: "rgb(126, 34, 206)",
                  color: "white",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            {navLinks.map((item, i) => (
              <motion.a
                key={item.text}
                href={`${item.href}`}
                className="text-gray-400 hover:text-purple-400 text-sm"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
