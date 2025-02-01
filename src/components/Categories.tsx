import { Card, CardContent } from "@/components/ui/card";
import { Brush, Code, Briefcase, Sprout, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const categories = [
  { name: "Art & Creativity", icon: Brush, color: "text-pink-500", slug: "art" },
  { name: "Technology", icon: Code, color: "text-blue-500", slug: "technology" },
  { name: "Business", icon: Briefcase, color: "text-purple-500", slug: "business" },
  { name: "Agriculture", icon: Sprout, color: "text-green-500", slug: "agriculture" },
  { name: "Education", icon: GraduationCap, color: "text-orange-500", slug: "education" },
];

export const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/stories?category=${category}`);
    toast({
      title: `Viewing ${category} stories`,
      description: "Showing stories filtered by your selected category",
    });
  };

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <category.icon className={`h-12 w-12 ${category.color} mb-4 group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-center">{category.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};