import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Heart } from "lucide-react";
import profileContact from "@/assets/profile-contact.jpg";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "yashmhatre2810@gmail.com",
      href: "mailto:yashmhatre2810@gmail.com",
      description: "Get in touch for opportunities"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mhatreyash",
      href: "https://github.com/mhatreyash",
      description: "View my projects and code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yashmhatre",
      href: "https://linkedin.com/in/yashmhatre",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card bg-gradient-card border-0">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Collaborate
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ready to collaborate on innovative projects or discuss opportunities in AI and 
                  software development. I'm always excited to connect with fellow tech enthusiasts 
                  and industry professionals.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Open to opportunities in AI research, software development internships, and 
                  collaborative projects. Let's build the future together!
                </p>
              </div>
            </Card>
            
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <Card key={method.label} className="p-6 shadow-soft hover-lift bg-gradient-card border-0 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{method.label}</h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <p className="text-sm text-primary font-medium">{method.value}</p>
                      </div>
                    </div>
                    <Button variant="contact" size="sm" asChild>
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="p-6 shadow-soft border-primary/10 bg-gradient-to-r from-primary/5 to-primary-glow/5">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <p className="text-muted-foreground font-medium">
                    Let's build the future together!
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <Button variant="hero" asChild>
                    <a href="mailto:yashmhatre2810@gmail.com">
                      <Mail className="w-5 h-5" />
                      Get In Touch
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl scale-105"></div>
              <img 
                src={profileContact} 
                alt="Yash Mhatre - Contact"
                className="relative w-full max-w-md h-auto object-cover rounded-2xl shadow-card animate-float"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};