import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const JoinCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Growing Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Connect with fellow creators, share your journey, and be part of Kenya's most inspiring youth
          platform.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="bg-white text-primary hover:bg-white/90"
          onClick={() => navigate('/signup')}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};