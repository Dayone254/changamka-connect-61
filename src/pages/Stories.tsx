import { useSearchParams } from "react-router-dom";
import { LiveFeed } from "@/components/LiveFeed";

const Stories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">
          {category 
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Stories`
            : "All Stories"
          }
        </h1>
        <LiveFeed category={category} />
      </div>
    </div>
  );
};

export default Stories;