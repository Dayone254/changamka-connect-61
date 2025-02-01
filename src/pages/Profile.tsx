import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Link2, Award, BadgeCheck } from "lucide-react";

const Profile = () => {
  // This would typically come from an API/database
  const profile = {
    name: "Sarah Kamau",
    profession: "Digital Artist & Tech Enthusiast",
    bio: "Creating at the intersection of art and technology. Passionate about empowering young Kenyans through digital innovation.",
    location: "Nairobi, Kenya",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    website: "https://sarahkamau.com",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/sarahkamau" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/sarahkamau" },
    ],
    projects: [
      {
        title: "Digital Art Exhibition",
        description: "A virtual showcase of contemporary African digital art",
        date: "2024",
      },
      {
        title: "Tech Workshop Series",
        description: "Teaching digital skills to youth in rural Kenya",
        date: "2023",
      },
    ],
    achievements: [
      { title: "Featured Creator", icon: BadgeCheck },
      { title: "Community Leader", icon: Award },
      { title: "Top Contributor", icon: BadgeCheck },
    ],
  };

  return (
    <div className="container py-8 space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>{profile.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="space-y-4 flex-1">
              <div>
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <p className="text-muted-foreground">{profile.profession}</p>
              </div>
              <p className="text-base">{profile.bio}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {profile.website && (
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                )}
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Link2 className="w-4 h-4" />
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Section */}
      <Card>
        <CardHeader>
          <CardTitle>Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {profile.projects.map((project) => (
              <div
                key={project.title}
                className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {project.date}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements Section */}
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {profile.achievements.map((achievement) => (
              <Badge
                key={achievement.title}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1"
              >
                <achievement.icon className="w-4 h-4" />
                {achievement.title}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;