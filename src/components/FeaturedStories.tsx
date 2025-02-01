import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const stories = [
  {
    title: "Tech Innovation in Nairobi",
    author: "James Kimani",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600/?tech",
    content: "In the heart of Nairobi's bustling tech scene, young innovators are creating solutions that address local challenges. From mobile payment systems to agricultural technology, these entrepreneurs are leveraging technology to transform their communities. Through collaborative spaces and mentorship programs, they're building a stronger ecosystem for innovation in East Africa.",
  },
  {
    title: "Sustainable Farming Project",
    author: "Sarah Mwangi",
    category: "Agriculture",
    image: "https://source.unsplash.com/random/800x600/?farming",
    content: "A group of young farmers in rural Kenya have implemented innovative sustainable farming practices that are revolutionizing local agriculture. By combining traditional knowledge with modern techniques, they've created a model that increases crop yields while protecting the environment. Their success has inspired neighboring communities to adopt similar methods.",
  },
  {
    title: "Youth Art Exhibition",
    author: "David Ochieng",
    category: "Art",
    image: "https://source.unsplash.com/random/800x600/?art",
    content: "The latest youth art exhibition in Nairobi showcases the incredible talent and creativity of young African artists. Through various mediums - from digital art to traditional paintings - these artists are telling powerful stories about identity, culture, and social change. The exhibition has become a platform for emerging artists to gain recognition and connect with the global art community.",
  },
];

export const FeaturedStories = () => {
  const [expandedStories, setExpandedStories] = useState<string[]>([]);
  const { toast } = useToast();

  const toggleStory = (title: string) => {
    setExpandedStories(prev => 
      prev.includes(title) 
        ? prev.filter(storyTitle => storyTitle !== title)
        : [...prev, title]
    );
  };

  const shareToSocialMedia = (platform: string, story: { title: string; content: string }) => {
    const url = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(story.title)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(story.title)}`;
        break;
      case "instagram":
        // Instagram doesn't support direct sharing via URL, so we'll copy to clipboard
        navigator.clipboard.writeText(`${story.title}\n\n${story.content}\n\nRead more at: ${url}`);
        toast({
          title: "Content copied!",
          description: "You can now paste this into your Instagram post.",
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{story.title}</CardTitle>
                <CardDescription>By {story.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className={`${expandedStories.includes(story.title) ? 'h-[200px]' : 'h-auto'}`}>
                  <p className={`text-muted-foreground mb-4 ${expandedStories.includes(story.title) ? '' : 'line-clamp-2'}`}>
                    {story.content}
                  </p>
                </ScrollArea>
                <div className="flex justify-between items-center mt-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </span>
                  <button
                    onClick={() => toggleStory(story.title)}
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    {expandedStories.includes(story.title) ? (
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
                <div className="flex gap-2 mt-4 justify-end">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => shareToSocialMedia("facebook", story)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => shareToSocialMedia("twitter", story)}
                    className="hover:text-sky-500 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => shareToSocialMedia("instagram", story)}
                    className="hover:text-pink-600 transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};