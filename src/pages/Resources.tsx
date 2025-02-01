import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, GraduationCap, Link } from "lucide-react";

const Resources = () => {
  const tutorials = [
    {
      title: "How to Write a Story",
      description: "Learn the fundamentals of storytelling and creative writing",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Building a Portfolio",
      description: "Create a compelling portfolio that showcases your work",
      icon: <BookOpen className="h-6 w-6" />,
    },
  ];

  const funding = [
    {
      title: "Youth Innovation Grants",
      description: "Financial support for innovative projects",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Creative Arts Funding",
      description: "Grants for creative and artistic endeavors",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const guides = [
    {
      title: "Project Management Basics",
      description: "Learn how to plan and execute projects effectively",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Presentation Skills",
      description: "Master the art of presenting your ideas",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ];

  const externalLinks = [
    {
      title: "Youth Development Programs",
      description: "External programs and opportunities",
      url: "#",
      icon: <Link className="h-6 w-6" />,
    },
    {
      title: "Educational Resources",
      description: "Additional learning materials",
      url: "#",
      icon: <Link className="h-6 w-6" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tutorials Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Tutorials
            </CardTitle>
            <CardDescription>Learn new skills and techniques</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  {tutorial.icon}
                  <div>
                    <h3 className="font-medium">{tutorial.title}</h3>
                    <p className="text-sm text-muted-foreground">{tutorial.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Funding Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6" />
              Funding Opportunities
            </CardTitle>
            <CardDescription>Find support for your projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funding.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  {item.icon}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Guides */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Guides
            </CardTitle>
            <CardDescription>Practical guides to help you succeed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {guides.map((guide, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  {guide.icon}
                  <div>
                    <h3 className="font-medium">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* External Links */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="h-6 w-6" />
              External Resources
            </CardTitle>
            <CardDescription>Useful links and additional resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {externalLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                  <div>
                    <h3 className="font-medium">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;