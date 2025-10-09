// File: src/components/Contact.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Heart } from "lucide-react";
import profileContact from "@/assets/profile-contact.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yashmhatre",
      href: "https://linkedin.com/in/yashmhatre",
      description: "Connect with me professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mhatreyash",
      href: "https://github.com/mhatreyash",
      description: "View my projects and code"
    },
    {
      icon: Mail,
      label: "Email",
      value: "yashmhatre2810@gmail.com",
      href: "https://mail.google.com/mail/u/1/#inbox?compose=CllgCHrgmVVzCnXkzxxnsQWjvKGbznFwTkgSFSdMLvLZWlvGCrGVlkxMtZjBmTkrLFkSsgTclRL",
      description: "Get in touch for opportunities"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 20 }
    },
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        <div className="gap-12 items-center flex justify-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants}>
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
            </motion.div>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <motion.div key={method.label} variants={itemVariants}>
                  <Card className="p-6 shadow-soft hover-lift bg-gradient-card border-0 group">
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
                </motion.div>
              ))}
            </div>


          </motion.div>

          {/* Contact Image */}

        </div>

      </div>
    </section>
  );
};