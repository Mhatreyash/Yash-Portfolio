// File: src/components/Experience.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import profileExperience from "@/assets/profile-experience.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Experience = () => {
  const achievements = [

    "Enhanced understanding of API design and backend architecture",
    "Collaborated with development teams using Git version control",
    "Implemented security practices and database management"
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
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Professional Experience</h2>
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
              <div className="space-y-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      Backend Development Intern
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground mt-1">
                      OpenSpace Services Pvt. Ltd.
                    </h4>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    <Calendar className="w-4 h-4 mr-1" />
                    May 2024 - July 2024
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Gained hands-on experience in backend development using Python and API frameworks.
                  Built and deployed RESTful APIs, implemented CRUD operations, and integrated JWT
                  authentication mechanisms.
                </p>

                <div className="space-y-3">
                  <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {["Python", "API Development", "JWT Authentication", "Git", "Backend Architecture", "Database Management"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Experience Image */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants(0.2)}
            initial="hidden"
            animate={controls}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl scale-105"></div>
              <img
                src={profileExperience}
                alt="Yash Mhatre - Professional Experience"
                className="relative w-full max-w-md h-auto object-cover rounded-2xl shadow-card animate-float"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};