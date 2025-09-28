import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Sparkles, Users } from "lucide-react";

export const Certifications = () => {
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

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className={`p-6 shadow-card hover-lift bg-gradient-to-br ${cert.gradient} backdrop-blur-sm border ${cert.borderColor} transition-all duration-500 hover:scale-105 group`}
              style={{ animationDelay: `${index * 200}ms` }}
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
          ))}
        </div>
        
        {/* Hackathon Participation */}
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
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            Made with ❤️ GAMMA
          </p>
        </div>
      </div>
    </section>
  );
};