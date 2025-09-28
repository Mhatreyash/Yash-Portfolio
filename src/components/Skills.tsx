import { Card } from "@/components/ui/card";
import { Brain, Code, Server, Database } from "lucide-react";

export const Skills = () => {
  const skills = [
    {
      icon: Brain,
      title: "Agentic AI",
      description: "Exploring image-to-code generation models and AI-driven applications for real-world problem solving.",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: Code,
      title: "Data Structures & Algorithms",
      description: "Strong foundation in DSA with practical implementation across multiple programming languages.",
      gradient: "from-blue-500/20 to-cyan-500/20"
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
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className={`p-6 shadow-card hover-lift bg-gradient-to-br ${skill.gradient} backdrop-blur-sm border-0 transition-all duration-500 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
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
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            Made with ❤️ GAMMA
          </p>
        </div>
      </div>
    </section>
  );
};