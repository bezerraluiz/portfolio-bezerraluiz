import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { text: "Sobre", href: "#about" },
    { text: "Tecnologias", href: "#technologies" },
    { text: "Projetos", href: "#projects" },
    { text: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 lg:px-24",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-2xl font-bold text-purple-600">
            Bezerra<span className="text-gray-800">Luiz</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.text}
              href={link.href}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                delay: 0.1 * index,
              }}
            >
              {link.text}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}{" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5548996533779&text=Fala%2C%20Luiz!%20Vim%20do%20teu%20portif%C3%B3lio%2C%20quero%20trabalhar%20contigo!"
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300">
                Orçamento
              </Button>
            </a>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 flex flex-col space-y-4 py-4 bg-white rounded-lg shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.text}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {link.text}
              </motion.a>
            ))}
            <motion.div
              className="px-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5548996533779&text=Fala%2C%20Luiz!%20Vim%20do%20teu%20portif%C3%B3lio%2C%20quero%20trabalhar%20contigo!"
              >
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Orçamento
                </Button>
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
