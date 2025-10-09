// File: src/components/Projects.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Zap, Gamepad2, TrendingUp } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Projects = () => {
  const projects = [
    {
      icon: Zap,
      title: "Designo - AI Figma Plugin",
      description: "AI-powered Figma plugin that transforms natural language prompts into design elements. Users can select frames and type prompts like \"Create a clean signup form\" to generate instant designs within Figma.",
      tags: ["AI", "Figma Plugin", "Natural Language Processing", "Design Automation"],
      gradient: "from-purple-500/10 to-blue-500/10",
      borderColor: "border-purple-500/20",
      githubUrl: "https://github.com/atharvaj1234/Designo" // Add your GitHub link here
    },
    {
      icon: TrendingUp,
      title: "Linear Drive - ML Predictor",
      description: "Machine learning project predicting car Miles per Gallon based on Horsepower and Weight using Linear Regression. Features data visualization, model evaluation with MSE and R² scores.",
      tags: ["Machine Learning", "Linear Regression", "Data Visualization", "Predictive Analytics"],
      gradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      githubUrl: "https://github.com/Mhatreyash/Linear-Drive-Predicting-Car-Fuel-Efficiency" // Add your GitHub link here
    },
    {
      icon: Gamepad2,
      title: "Othello Game",
      description: "Modern twist on the classic strategy game featuring CPU vs human gameplay. \"Where the board meets brilliance!\" - showcasing how technology elevates traditional games to new heights.",
      tags: ["Game Development", "AI Strategy", "Interactive Gaming", "Algorithm Implementation"],
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      githubUrl: "https://github.com/Mhatreyash/Othello" // Add your GitHub link here
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
    <section id="projects" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card
                className={`p-6 shadow-card hover-lift bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.borderColor} transition-all duration-500 hover:scale-105 group h-full`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">

                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="ghost" size="sm" className="w-full">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};