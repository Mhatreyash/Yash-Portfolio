// File: src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react";
import profileHero from "@/assets/profile-hero.jpg";
import { motion } from "framer-motion";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="heading-hero">
                Yash Mhatre
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Computer Engineering Student
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground">
                  AI & ML Enthusiast
                </h3>
                <h4 className="text-lg md:text-xl font-medium text-muted-foreground">
                  Software Developer
                </h4>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              2nd year B.Tech student passionate about innovation, AI, and software development
              with expertise across multiple programming languages and frameworks.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <Button variant="hero" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/src/assets/yash_resume.pdf" download="yash_resume.pdf">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-2xl opacity-20 scale-105"></div>
              <img
                src={profileHero}
                alt="Yash Mhatre - Computer Engineering Student & AI Enthusiast"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-hero animate-float hover-lift"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};