import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stories = [
  {
    title: "Tech Innovation in Nairobi",
    author: "James Kimani",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600/?tech",
  },
  {
    title: "Sustainable Farming Project",
    author: "Sarah Mwangi",
    category: "Agriculture",
    image: "https://source.unsplash.com/random/800x600/?farming",
  },
  {
    title: "Youth Art Exhibition",
    author: "David Ochieng",
    category: "Art",
    image: "https://source.unsplash.com/random/800x600/?art",
  },
];

export const FeaturedStories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{story.title}</CardTitle>
                <CardDescription>By {story.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {story.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};