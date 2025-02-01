import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ImagePlus, Send } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// This would typically come from a database
const STORAGE_KEY = 'user_stories';

interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const EditStory = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !imagePreview) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields and add an image.",
        variant: "destructive",
      });
      return;
    }

    // Create new story object
    const newStory: Story = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      author: "Anonymous", // In a real app, this would come from user authentication
      date: new Date().toISOString(),
      category: "General", // This could be made selectable in a future update
      image: imagePreview,
    };

    // Get existing stories from localStorage
    const existingStoriesJSON = localStorage.getItem(STORAGE_KEY);
    const existingStories: Story[] = existingStoriesJSON ? JSON.parse(existingStoriesJSON) : [];

    // Add new story to the beginning of the array
    const updatedStories = [newStory, ...existingStories];

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStories));

    toast({
      title: "Story shared successfully!",
      description: "Your story has been published.",
    });
    
    navigate("/stories");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Story title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg font-semibold"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="What's your story?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px] resize-none"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="w-full"
                onClick={() => document.getElementById("image-upload")?.click()}
              >
                <ImagePlus className="h-4 w-4 mr-2" />
                Add Image
              </Button>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            
            {imagePreview && (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-md"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={!content.trim() || !title.trim() || !imagePreview}>
            <Send className="h-4 w-4 mr-2" />
            Share Story
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default EditStory;