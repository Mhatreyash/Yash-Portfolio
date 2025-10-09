// File: src/components/Certifications.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Sparkles, Users, Medal } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Certifications = () => {
  const presentations = [
     {
      icon: Trophy,
      name: "1st Prize",
      description: "MSBTE's State Level Technical Paper Presentation"
    },
    {
      icon: Trophy,
      name: "1st Prize",
      description: "B.V.P's State Level Technical Paper Presentation"
    }
  ]
  const certifications = [
    {
      icon: Award,
      title: "Python Essentials 2",
      issuer: "CISCO",
      description: "Certified by CISCO - Advanced Python programming concepts and practical applications.",
      type: "Professional Certification",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Sparkles,
      title: "Google AI Skill Badges",
      issuer: "Google Cloud",
      description: "Build Real World AI Applications with Gemini and Imagen • Explore Generative AI with Vertex AI Gemini API",
      type: "AI Specialization",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Trophy,
      title: "Gen AI: Beyond The Chatbot",
      issuer: "Industry Certification",
      description: "Advanced certification in generative AI applications and implementation strategies.",
      type: "Advanced AI",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  const hackathons = [
    {
      name: "Google's Bit N Build Around The World 2024",
      description: "Enhanced UI/UX and problem-solving skills"
    },
    {
      name: "Pixel Designathon",
      description: "Enhanced UI/UX and problem-solving skills"
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
    <section id="certifications" className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        {/* Updated Technical Paper Presentations Section */}
        <motion.div
          className="grid gap-8 mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <Card className="p-8 shadow-card bg-gradient-card border-0">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Medal className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Technical Paper Presentations</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                {presentations.map((presentation, index) => (
                  <div
                    key={index}
                    className="flex text-left items-center gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5 transition-all hover:shadow-md hover:border-primary/40"
                  >
                    <div className="bg-amber-400/10 w-16 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <presentation.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary">{presentation.name}</h4>
                      <p className="text-sm text-muted-foreground">{presentation.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={itemVariants}>
              <Card
                className={`p-6 shadow-card hover-lift bg-gradient-to-br ${cert.gradient} backdrop-blur-sm border ${cert.borderColor} transition-all duration-500 hover:scale-105 group h-full`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                      {cert.type}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mt-1">{cert.issuer}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Hackathon Participation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <Card className="p-8 shadow-card bg-gradient-card border-0">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Hackathon Participation</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {hackathons.map((hackathon, index) => (
                  <div key={index} className="text-center space-y-2">
                    <h4 className="font-semibold text-foreground">{hackathon.name}</h4>
                    <p className="text-sm text-muted-foreground">{hackathon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};