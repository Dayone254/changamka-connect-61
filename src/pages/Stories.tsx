import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const sampleStories: Story[] = [
  {
    id: "1",
    title: "My Journey in Tech",
    content: "Starting my career in technology was both challenging and rewarding. As a young developer in Africa, I faced numerous obstacles but also discovered incredible opportunities. The tech ecosystem here is vibrant and growing rapidly, with innovation hubs springing up in major cities. Through persistence and continuous learning, I've been able to contribute to several impactful projects that address local challenges. My journey has taught me that with determination and the right support system, anyone can succeed in tech, regardless of their background. I'm particularly proud of the mentoring program I started, which helps other aspiring developers navigate their early careers. The future of tech in Africa is bright, and I'm excited to be part of this transformative journey.",
    author: "Sarah Johnson",
    date: "2024-02-01",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600/?technology"
  },
  {
    id: "2",
    title: "Building Communities",
    content: "The importance of community building in today's digital age cannot be overstated. Through my experience working with various local groups, I've learned that strong communities are built on trust, shared values, and consistent engagement. We started with small weekly meetups that gradually grew into a network of support and collaboration. Our community now spans several neighborhoods, bringing together people from different backgrounds who share a common vision for positive change. We've implemented several successful initiatives, from youth mentorship programs to environmental conservation projects. The impact of these efforts has shown us that when people come together with purpose, remarkable transformations are possible.",
    author: "Michael Chen",
    date: "2024-01-30",
    category: "Community",
    image: "https://source.unsplash.com/random/800x600/?community"
  },
  {
    id: "3",
    title: "Sustainable Living",
    content: "My experience transitioning to a more sustainable lifestyle has been eye-opening and rewarding. It began with small changes: reducing plastic use, composting kitchen waste, and being more mindful of energy consumption. Over time, these small steps led to bigger transformations in how I live and interact with my environment. I installed solar panels, started a community garden, and began teaching others about sustainable practices. The journey hasn't always been easy, but the benefits to both personal well-being and environmental impact have been significant. Through workshops and social media, I've been able to share these experiences and inspire others to make their own sustainable changes. It's amazing to see how individual actions, when multiplied across a community, can create meaningful environmental impact.",
    author: "Emma Williams",
    date: "2024-01-28",
    category: "Lifestyle",
    image: "https://source.unsplash.com/random/800x600/?sustainable"
  }
];

const Stories = () => {
  const navigate = useNavigate();
  const [expandedStories, setExpandedStories] = useState<string[]>([]);

  const toggleStory = (id: string) => {
    setExpandedStories(prev => 
      prev.includes(id) 
        ? prev.filter(storyId => storyId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Stories</h1>
          <Button 
            onClick={() => navigate("/profile")}
            className="bg-primary hover:bg-primary/90"
          >
            Share Your Story
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleStories.map((story) => (
            <Card key={story.id} className="hover:shadow-lg transition-shadow">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-xl">{story.title}</CardTitle>
                <CardDescription>By {story.author} • {new Date(story.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className={`${expandedStories.includes(story.id) ? 'h-[300px]' : 'h-auto'}`}>
                  <p className={`text-muted-foreground ${expandedStories.includes(story.id) ? '' : 'line-clamp-3'}`}>
                    {story.content}
                  </p>
                </ScrollArea>
                <div className="flex justify-between items-center mt-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </span>
                  <button
                    onClick={() => toggleStory(story.id)}
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    {expandedStories.includes(story.id) ? (
                      <>
                        Read Less <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;