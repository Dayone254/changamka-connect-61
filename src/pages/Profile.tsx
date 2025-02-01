import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Link2, Award, BadgeCheck, Pencil, Save, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // This would typically come from an API/database
  const [profile, setProfile] = useState({
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
  });

  const form = useForm({
    defaultValues: {
      name: profile.name,
      profession: profile.profession,
      bio: profile.bio,
      location: profile.location,
      website: profile.website,
    },
  });

  const onSubmit = (data: any) => {
    setProfile((prev) => ({
      ...prev,
      ...data,
    }));
    setIsEditing(false);
    console.log("Profile updated:", data);
  };

  return (
    <div className="container py-8 space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              {!isEditing ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="float-right"
                  onClick={() => setIsEditing(true)}
                >
                  <Pencil className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="float-right space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(false)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>{profile.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="space-y-4 flex-1">
              {isEditing ? (
                <Form {...form}>
                  <form className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="profession"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Profession</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bio</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input {...field} type="url" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              ) : (
                <>
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
                </>
              )}
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