
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

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
      icon: Mail,
      title: "Email",
      value: "joao.silva@email.com",
      link: "mailto:joao.silva@email.com"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      link: "https://wa.me/5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: null
    }
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/joaosilva", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/joaosilva", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com/joaosilva", icon: Twitter },
    { name: "Instagram", url: "https://instagram.com/joaosilva", icon: Instagram }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos conversar sobre seu próximo projeto! Estou sempre aberto a novas oportunidades e desafios
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-primary text-lg">{info.title}</div>
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
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Redes Sociais</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/10 hover:border-primary/40 h-12 justify-start"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <IconComponent className="w-5 h-5 mr-3 text-primary" />
                      {social.name}
                    </Button>
                  );
                })}
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Disponibilidade</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Disponível para novos projetos
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Resposta em até 24 horas
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Trabalho remoto ou presencial (São Paulo)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-primary">Envie uma Mensagem</h3>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
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
