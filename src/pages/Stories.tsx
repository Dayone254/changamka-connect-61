import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LiveFeed } from "@/components/LiveFeed";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal } from "lucide-react";
import { Categories } from "@/components/Categories";

const categories = [
  { name: "Art & Creativity", slug: "art" },
  { name: "Technology & Innovation", slug: "technology" },
  { name: "Business & Entrepreneurship", slug: "business" },
  { name: "Agriculture & Sustainability", slug: "agriculture" },
  { name: "Education & Research", slug: "education" },
];

const sortOptions = [
  { label: "Most Recent", value: "recent" },
  { label: "Most Popular", value: "popular" },
  { label: "Editor's Pick", value: "featured" },
];

const Stories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") || "recent";

  const handleSortChange = (value: string) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Sample tags - in a real app, these would come from your backend
  const popularTags = ["Innovation", "Youth", "Community", "Success", "Inspiration"];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16 space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            {category 
              ? `${category.charAt(0).toUpperCase() + category.slice(1)} Stories`
              : "Discover Stories"
            }
          </h1>
          <p className="text-muted-foreground">
            Explore inspiring stories from across Africa
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={sort} onValueChange={handleSortChange}>
            <SelectTrigger>
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Tags Section */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/90"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <Categories />

        {/* Stories Feed */}
        <LiveFeed 
          category={category} 
          searchTerm={searchTerm}
          tags={selectedTags}
          sortBy={sort}
        />
      </div>
    </div>
  );
};

export default Stories;