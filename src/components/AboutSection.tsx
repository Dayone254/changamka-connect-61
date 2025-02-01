import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Changamka</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Changamka is more than a platform - it's a movement to empower Kenyan youth through
            storytelling, connection, and collaboration. We believe every young person has a unique
            story worth sharing and a dream worth pursuing.
          </p>
          <Button variant="outline" size="lg">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};