import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileHero from "@/assets/profile-hero.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="heading-hero animate-slide-up">
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
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              2nd year B.Tech student passionate about innovation, AI, and software development 
              with expertise across multiple programming languages and frameworks.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/yashmhatre" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  View LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/mhatreyash" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-muted-foreground italic">
                Made with ❤️ GAMMA
              </p>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-2xl opacity-20 scale-105"></div>
              <img 
                src={profileHero} 
                alt="Yash Mhatre - Computer Engineering Student & AI Enthusiast"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-hero animate-float hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};