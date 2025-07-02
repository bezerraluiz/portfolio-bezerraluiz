
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem Enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "joao.silva@email.com",
      link: "mailto:joao.silva@email.com"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      link: "https://wa.me/5511999999999"
    },
    {
      icon: "📍",
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/joaosilva",
      icon: "🐙"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/joaosilva",
      icon: "💼"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/joaosilva",
      icon: "🐦"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/joaosilva",
      icon: "📸"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos conversar sobre seu próximo projeto! Estou sempre aberto a novas oportunidades e desafios
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{info.icon}</span>
                        <div>
                          <div className="font-medium text-primary">{info.title}</div>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-muted-foreground hover:text-primary transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Redes Sociais</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <span className="mr-2 text-lg">{social.icon}</span>
                    {social.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">Disponibilidade</h3>
                <p className="text-muted-foreground">
                  ✅ Disponível para novos projetos
                  <br />
                  ⏰ Resposta em até 24 horas
                  <br />
                  🌍 Trabalho remoto ou presencial (São Paulo)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Envie uma Mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Sobre o que gostaria de conversar?"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Descreva seu projeto ou necessidade..."
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
