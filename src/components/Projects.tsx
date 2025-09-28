import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Gamepad2, TrendingUp } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: Zap,
      title: "Designo - AI Figma Plugin",
      description: "AI-powered Figma plugin that transforms natural language prompts into design elements. Users can select frames and type prompts like \"Create a clean signup form\" to generate instant designs within Figma.",
      tags: ["AI", "Figma Plugin", "Natural Language Processing", "Design Automation"],
      gradient: "from-purple-500/10 to-blue-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: TrendingUp,
      title: "Linear Drive - ML Predictor",
      description: "Machine learning project predicting car Miles per Gallon based on Horsepower and Weight using Linear Regression. Features data visualization, model evaluation with MSE and R² scores.",
      tags: ["Machine Learning", "Linear Regression", "Data Visualization", "Predictive Analytics"],
      gradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: Gamepad2,
      title: "Othello Game",
      description: "Modern twist on the classic strategy game featuring CPU vs human gameplay. \"Where the board meets brilliance!\" - showcasing how technology elevates traditional games to new heights.",
      tags: ["Game Development", "AI Strategy", "Interactive Gaming", "Algorithm Implementation"],
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`p-6 shadow-card hover-lift bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.borderColor} transition-all duration-500 hover:scale-105 group`}
              style={{ animationDelay: `${index * 200}ms` }}
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    View Demo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};