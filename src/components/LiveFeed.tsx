import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";

type Story = {
  id: string;
  title: string;
  author: string;
  timestamp: string;
  category: string;
};

const recentStories: Story[] = [
  {
    id: "1",
    title: "Building a Solar-Powered Irrigation System",
    author: "John Kamau",
    timestamp: "2 minutes ago",
    category: "Agriculture",
  },
  {
    id: "2",
    title: "My Journey as a Digital Artist",
    author: "Grace Muthoni",
    timestamp: "15 minutes ago",
    category: "Art",
  },
  {
    id: "3",
    title: "Starting a Community Library",
    author: "Peter Omondi",
    timestamp: "45 minutes ago",
    category: "Education",
  },
  {
    id: "4",
    title: "Developing Mobile Apps for Local Businesses",
    author: "Sarah Njeri",
    timestamp: "1 hour ago",
    category: "Technology",
  },
];

export const LiveFeed = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Stories</h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? (
              <>
                Show Less <ArrowUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show More <ArrowDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 max-h-[600px] overflow-hidden transition-all duration-300">
          {recentStories.slice(0, isExpanded ? undefined : 2).map((story) => (
            <Card key={story.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
                    <p className="text-sm text-foreground/60">By {story.author}</p>
                  </div>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </span>
                </div>
                <p className="text-sm text-foreground/60 mt-4">{story.timestamp}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};