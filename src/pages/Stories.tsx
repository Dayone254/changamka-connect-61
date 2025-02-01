import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const sampleStories: Story[] = [
  {
    id: "1",
    title: "My Journey in Tech",
    content: "Starting my career in technology was both challenging and rewarding...",
    author: "Sarah Johnson",
    date: "2024-02-01",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600/?technology"
  },
  {
    id: "2",
    title: "Building Communities",
    content: "The importance of community building in today's digital age...",
    author: "Michael Chen",
    date: "2024-01-30",
    category: "Community",
    image: "https://source.unsplash.com/random/800x600/?community"
  },
  {
    id: "3",
    title: "Sustainable Living",
    content: "My experience transitioning to a more sustainable lifestyle...",
    author: "Emma Williams",
    date: "2024-01-28",
    category: "Lifestyle",
    image: "https://source.unsplash.com/random/800x600/?sustainable"
  }
];

const Stories = () => {
  const navigate = useNavigate();

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
                <p className="text-muted-foreground line-clamp-3">{story.content}</p>
                <div className="mt-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </span>
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