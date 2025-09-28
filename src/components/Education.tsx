import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, FileText, Calendar, MapPin } from "lucide-react";
import profileEducation from "@/assets/profile-education.jpg";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section">Education & Research</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card hover-lift bg-gradient-card border-0">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Academic Journey</h3>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground">
                    Bachelor of Technology - Computer Engineering
                  </h4>
                  
                  <p className="text-lg font-medium text-muted-foreground">
                    SVKM's Shri Bhagubhai Mafatlal Polytechnic and College of Engineering
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <Calendar className="w-4 h-4 mr-1" />
                      Expected Graduation: August 2025
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-card hover-lift bg-gradient-card border-0">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Research & Writing</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Currently working on publishing a research paper with proper IEEE citation formatting. 
                  Passionate about technical documentation and contributing to the academic community 
                  through innovative research.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {["Research Papers", "IEEE Citation", "Technical Documentation", "Academic Writing"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-primary/20 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Education Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl scale-105"></div>
              <img 
                src={profileEducation} 
                alt="Yash Mhatre - Education and Research"
                className="relative w-full max-w-md h-auto object-cover rounded-2xl shadow-card animate-float"
              />
            </div>
          </div>
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