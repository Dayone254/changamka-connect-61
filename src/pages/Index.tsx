import { Hero } from "@/components/Hero";
import { FeaturedStories } from "@/components/FeaturedStories";
import { Categories } from "@/components/Categories";
import { AboutSection } from "@/components/AboutSection";
import { JoinCTA } from "@/components/JoinCTA";
import { LiveFeed } from "@/components/LiveFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturedStories />
      <Categories />
      <LiveFeed />
      <AboutSection />
      <JoinCTA />
    </div>
  );
};

export default Index;