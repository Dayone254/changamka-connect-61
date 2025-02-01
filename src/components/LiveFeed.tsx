import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type Story = {
  id: string;
  title: string;
  author: string;
  timestamp: string;
  category: string;
  content: string;
};

const recentStories: Story[] = [
  {
    id: "1",
    title: "Building a Solar-Powered Irrigation System",
    author: "John Kamau",
    timestamp: "2 minutes ago",
    category: "Agriculture",
    content: "In the heart of rural Kenya, our community came together to implement a solar-powered irrigation system that has transformed local farming practices. This innovative solution not only helps conserve water but also provides sustainable energy for our agricultural needs. The project began when we noticed the increasing challenges faced by local farmers due to irregular rainfall patterns. Through collaborative efforts and technical expertise from local engineers, we designed and installed solar panels that power water pumps, ensuring consistent irrigation throughout the year. This has led to improved crop yields and created new opportunities for year-round farming.",
  },
  {
    id: "2",
    title: "My Journey as a Digital Artist",
    author: "Grace Muthoni",
    timestamp: "15 minutes ago",
    category: "Art",
    content: "My path as a digital artist began in a small cyber café in Nairobi, where I first discovered the power of digital creation. Starting with basic design software, I taught myself the fundamentals of digital art, drawing inspiration from our rich cultural heritage and contemporary African life. Over the years, I've developed a unique style that blends traditional African artistry with modern digital techniques. This journey hasn't been without challenges, but each obstacle has helped shape my artistic voice. Today, I create artwork that celebrates our stories, traditions, and the vibrant spirit of Africa.",
  },
  {
    id: "3",
    title: "Starting a Community Library",
    author: "Peter Omondi",
    timestamp: "45 minutes ago",
    category: "Education",
    content: "The idea of starting a community library came from seeing children in our neighborhood hungry for knowledge but lacking access to books. What began as a small collection of donated books in my living room has grown into a thriving community space. We now have over 1,000 books, a dedicated reading area, and regular reading programs for children. The library has become more than just a place to borrow books; it's a hub for learning, sharing stories, and building community connections. Local volunteers help manage the library, and we've seen a remarkable improvement in children's reading habits and academic performance.",
  },
  {
    id: "4",
    title: "Developing Mobile Apps for Local Businesses",
    author: "Sarah Njeri",
    timestamp: "1 hour ago",
    category: "Technology",
    content: "As a software developer in Tanzania, I recognized the need for affordable, locally-developed mobile solutions for small businesses. Many local entrepreneurs struggled with digital transformation due to the high costs of existing solutions. I started developing custom mobile applications that address specific needs of local businesses, from inventory management to customer relationship systems. The journey has been rewarding, seeing how technology can empower local entrepreneurs and help their businesses grow. Through collaboration with local business owners, we've created solutions that are both effective and culturally relevant.",
  },
];

export const LiveFeed = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedStories, setExpandedStories] = useState<string[]>([]);

  const toggleStory = (id: string) => {
    setExpandedStories(prev => 
      prev.includes(id) 
        ? prev.filter(storyId => storyId !== id)
        : [...prev, id]
    );
  };

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
        <div className="grid grid-cols-1 gap-4 max-h-[800px] overflow-hidden transition-all duration-300">
          {recentStories.slice(0, isExpanded ? undefined : 2).map((story) => (
            <Card key={story.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
                    <p className="text-sm text-foreground/60">By {story.author}</p>
                  </div>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </span>
                </div>
                <ScrollArea className={`mt-4 ${expandedStories.includes(story.id) ? 'h-[300px]' : 'h-auto'}`}>
                  <p className={`text-muted-foreground ${expandedStories.includes(story.id) ? '' : 'line-clamp-2'}`}>
                    {story.content}
                  </p>
                </ScrollArea>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-foreground/60">{story.timestamp}</p>
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
    </section>
  );
};