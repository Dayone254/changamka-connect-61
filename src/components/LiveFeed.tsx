import { saveForOffline } from "@/utils/offlineStorage";
import { updateUserProgress } from "@/utils/gamification";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { formatDistanceToNow } from "date-fns";

interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

interface LiveFeedProps {
  category?: string | null;
  searchTerm?: string;
  tags?: string[];
  sortBy?: string;
}

export const LiveFeed = ({ category, searchTerm, tags, sortBy }: LiveFeedProps) => {
  const { toast } = useToast();

  // Get stories from localStorage
  const stories: Story[] = JSON.parse(localStorage.getItem('user_stories') || '[]');

  // Filter stories based on category, search term, and tags
  const filteredStories = stories.filter(story => {
    const matchesCategory = !category || story.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = !searchTerm || 
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = !tags?.length || tags.some(tag => 
      story.content.toLowerCase().includes(tag.toLowerCase())
    );
    
    return matchesCategory && matchesSearch && matchesTags;
  });

  // Sort stories based on sortBy parameter
  const sortedStories = [...filteredStories].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    // Add other sorting methods as needed
    return 0;
  });

  const handleSaveOffline = (story: Story) => {
    if (saveForOffline(story)) {
      updateUserProgress('offline_reader');
      toast({
        title: "Story saved for offline reading",
        description: "You can access this story even without internet connection",
      });
    }
  };

  return (
    <div className="space-y-6">
      {sortedStories.map((story) => (
        <Card key={story.id} className="relative overflow-hidden">
          <CardContent className="p-6">
            <div className="flex gap-6">
              {story.image && (
                <div className="relative w-[200px] h-[200px] flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                  />
                </div>
              )}
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">{story.title}</h2>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${story.author}`} />
                      <AvatarFallback>{story.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">
                      {story.author} • {formatDistanceToNow(new Date(story.date), { addSuffix: true })}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-3">{story.content}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{story.category}</Badge>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4"
              onClick={() => handleSaveOffline(story)}
            >
              <Download className="h-4 w-4 mr-2" />
              Save Offline
            </Button>
          </CardContent>
        </Card>
      ))}
      {sortedStories.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No stories found. Be the first to share your story!
        </div>
      )}
    </div>
  );
};