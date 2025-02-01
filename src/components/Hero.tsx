import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81")',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-background/95 to-secondary/90" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      <div className="container mx-auto px-4 text-center z-10 animate-fade-down">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Your Stories, Your Voice
          <br />
          One Platform
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Join thousands of young Kenyans sharing their stories, projects, and dreams. Connect, inspire,
          and grow together on Changamka.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate("/edit-story")}
          >
            Share Your Story
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate("/stories")}
          >
            Explore Stories
          </Button>
        </div>
      </div>
    </div>
  );
};