// File: src/components/About.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Server } from "lucide-react";
import profileAbout from "@/assets/profile-about.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const About = () => {
  const coreSkills = [
    "Python", "JavaScript", "C", "C++", "Java", "PHP"
  ];

  const frameworks = [
    "FastAPI", "Django", "Flask"
  ];

  const expertise = [
    {
      icon: Brain,
      title: "AI-driven applications & automation",
      description: "Building intelligent solutions"
    },
    {
      icon: Server,
      title: "RESTful API development",
      description: "Scalable backend services"
    },
    {
      icon: Database,
      title: "Database management & design",
      description: "Efficient data solutions"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const itemVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 20, delay }
    },
  });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">About Me</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            variants={itemVariants(0)}
            initial="hidden"
            animate={controls}
          >
            <Card className="p-8 shadow-card hover-lift bg-gradient-card border-0">
              <h3 className="text-2xl font-bold text-primary mb-4">Current Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                My current efforts are centered on the intersection of <strong>AI and web development</strong>. I am actively developing my expertise in machine learning model integration and exploring scalable cloud solutions on <strong>Google Cloud Platform</strong> to support full-stack applications.
              </p>
            </Card>

            <Card className="p-8 shadow-card hover-lift bg-gradient-card border-0">
              <h3 className="text-2xl font-bold text-primary mb-6">Core Expertise</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {coreSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {frameworks.map((framework) => (
                      <Badge key={framework} variant="outline" className="border-primary/20 text-primary">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {expertise.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">{item.title}</h5>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft border-primary/10 bg-gradient-to-r from-primary/5 to-primary-glow/5">
              <p className="text-muted-foreground leading-relaxed italic">
                "I thrive in environments where I can learn and implement cutting-edge technologies
                to solve real-world challenges. Always eager to collaborate, learn, and push boundaries in tech!"
              </p>
            </Card>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants(0.2)}
            initial="hidden"
            animate={controls}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl scale-105"></div>
              <img
                src={profileAbout}
                alt="Yash Mhatre - About Profile"
                className="relative w-full max-w-md h-auto object-cover rounded-2xl shadow-card animate-float"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};