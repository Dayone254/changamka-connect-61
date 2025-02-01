import { Info, Users, Heart, Handshake, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-foreground/80 mb-8">
              Empowering Kenyan youth through storytelling, connection, and collaboration. We believe
              every young person has a unique story worth sharing and a dream worth pursuing.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Heart className="mx-auto mb-4 text-primary h-12 w-12" />
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p className="text-foreground/70">
                We believe in the power of youth to create positive change in their communities.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="mx-auto mb-4 text-primary h-12 w-12" />
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-foreground/70">
                Building connections and fostering collaboration among young Kenyans.
              </p>
            </div>
            <div className="text-center p-6">
              <Globe className="mx-auto mb-4 text-primary h-12 w-12" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-foreground/70">
                Encouraging creative solutions to local and global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <Info className="text-primary mb-4 h-8 w-8" />
                <h3 className="text-xl font-semibold mb-3">1000+ Stories Shared</h3>
                <p className="text-foreground/70">
                  Young Kenyans sharing their experiences and inspiring others.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <Handshake className="text-primary mb-4 h-8 w-8" />
                <h3 className="text-xl font-semibold mb-3">500+ Connections Made</h3>
                <p className="text-foreground/70">
                  Meaningful collaborations and mentorships formed through our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Be part of a community that's shaping the future of Kenya through storytelling and
              collaboration.
            </p>
            <Button 
              size="lg" 
              className="animate-fade-up"
              onClick={() => navigate("/profile")}
            >
              Share Your Story Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;