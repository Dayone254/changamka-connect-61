import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const STORAGE_KEY = 'user_stories';

const Stories = () => {
  const navigate = useNavigate();
  const [expandedStories, setExpandedStories] = useState<string[]>([]);
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const storiesFromStorage = localStorage.getItem(STORAGE_KEY);
    if (storiesFromStorage) {
      setStories(JSON.parse(storiesFromStorage));
    }
  }, []);

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
            onClick={() => navigate("/edit-story")}
            className="bg-primary hover:bg-primary/90"
          >
            Share Your Story
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.length > 0 ? (
            stories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{story.title}</CardTitle>
                  <CardDescription>
                    By {story.author} • {new Date(story.date).toLocaleDateString()}
                  </CardDescription>
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
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No stories yet. Be the first to share your story!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stories;