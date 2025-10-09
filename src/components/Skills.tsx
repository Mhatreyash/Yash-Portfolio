// File: src/components/Skills.tsx
import { Card } from "@/components/ui/card";
import { Brain, Code, Server, Database } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Skills = () => {
  const skills = [
    {
      icon: Brain,
      title: "Agentic AI",
      description: "Exploring image-to-code generation models and AI-driven applications for real-world problem solving.",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Expertise in Python frameworks including FastAPI, Django, and Flask for scalable solutions.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in database design, CRUD operations, and data optimization techniques.",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Code,
      title: "Data Structures & Algorithms",
      description: "Strong foundation in DSA with practical implementation across multiple programming languages.",
      gradient: "from-blue-500/20 to-cyan-500/20"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
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
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill) => (
            <motion.div key={skill.title} variants={itemVariants}>
              <Card
                className={`p-6 shadow-card hover-lift bg-gradient-to-br ${skill.gradient} backdrop-blur-sm border-0 transition-all duration-500 hover:scale-105 h-full`}
              >
                <div className="text-center space-y-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};