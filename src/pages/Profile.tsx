import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Globe, Link2, Award, BadgeCheck, Pencil, Save, X, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { getUserProgress, achievements } from "@/utils/gamification";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPortfolio, setIsEditingPortfolio] = useState(false);
  const [isEditingAchievements, setIsEditingAchievements] = useState(false);
  
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

  const portfolioForm = useForm({
    defaultValues: {
      newProjectTitle: "",
      newProjectDescription: "",
      newProjectDate: "",
    },
  });

  const achievementForm = useForm({
    defaultValues: {
      newAchievementTitle: "",
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

  const addProject = (data: any) => {
    const newProject = {
      title: data.newProjectTitle,
      description: data.newProjectDescription,
      date: data.newProjectDate,
    };
    setProfile((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
    portfolioForm.reset();
    console.log("Project added:", newProject);
  };

  const removeProject = (index: number) => {
    setProfile((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
    console.log("Project removed at index:", index);
  };

  const addAchievement = (data: any) => {
    const newAchievement = {
      title: data.newAchievementTitle,
      icon: BadgeCheck, // Default icon
    };
    setProfile((prev) => ({
      ...prev,
      achievements: [...prev.achievements, newAchievement],
    }));
    achievementForm.reset();
    console.log("Achievement added:", newAchievement);
  };

  const removeAchievement = (index: number) => {
    setProfile((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
    console.log("Achievement removed at index:", index);
  };

  const userProgress = getUserProgress();
  
  return (
    <div className="container py-8 space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              {!isEditing ? (
                <div className="float-right space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => navigate("/edit-story")}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Share Story
                  </Button>
                </div>
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

      {/* Gamification Section */}
      <Card>
        <CardHeader>
          <CardTitle>Progress & Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Level {userProgress.level}</h3>
                <p className="text-sm text-muted-foreground">
                  {userProgress.points} points earned
                </p>
              </div>
              <Progress
                value={(userProgress.points % 100)}
                className="w-[60%]"
              />
            </div>
            
            <div className="grid gap-4">
              {achievements.map((achievement) => {
                const isUnlocked = userProgress.achievements.includes(achievement.id);
                return (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border ${
                      isUnlocked ? 'bg-primary/10' : 'bg-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant={isUnlocked ? 'default' : 'outline'}>
                        {achievement.points} pts
                      </Badge>
                      <h4 className="font-semibold">{achievement.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Portfolio</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditingPortfolio(!isEditingPortfolio)}
          >
            {isEditingPortfolio ? (
              <>
                <X className="w-4 h-4 mr-2" />
                Done
              </>
            ) : (
              <>
                <Pencil className="w-4 h-4 mr-2" />
                Edit Portfolio
              </>
            )}
          </Button>
        </CardHeader>
        <CardContent>
          {isEditingPortfolio && (
            <Form {...portfolioForm}>
              <form onSubmit={portfolioForm.handleSubmit(addProject)} className="space-y-4 mb-4">
                <FormField
                  control={portfolioForm.control}
                  name="newProjectTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter project title" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={portfolioForm.control}
                  name="newProjectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Enter project description" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={portfolioForm.control}
                  name="newProjectDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter project date" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </form>
            </Form>
          )}
          <div className="grid gap-4">
            {profile.projects.map((project, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors relative"
              >
                {isEditingPortfolio && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => removeProject(index)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                )}
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
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Achievements</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditingAchievements(!isEditingAchievements)}
          >
            {isEditingAchievements ? (
              <>
                <X className="w-4 h-4 mr-2" />
                Done
              </>
            ) : (
              <>
                <Pencil className="w-4 h-4 mr-2" />
                Edit Achievements
              </>
            )}
          </Button>
        </CardHeader>
        <CardContent>
          {isEditingAchievements && (
            <Form {...achievementForm}>
              <form onSubmit={achievementForm.handleSubmit(addAchievement)} className="space-y-4 mb-4">
                <FormField
                  control={achievementForm.control}
                  name="newAchievementTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Achievement Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter achievement title" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Achievement
                </Button>
              </form>
            </Form>
          )}
          <div className="flex flex-wrap gap-3">
            {profile.achievements.map((achievement, index) => (
              <div key={index} className="relative">
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1"
                >
                  <achievement.icon className="w-4 h-4" />
                  {achievement.title}
                </Badge>
                {isEditingAchievements && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -top-2 -right-2 h-4 w-4"
                    onClick={() => removeAchievement(index)}
                  >
                    <X className="w-3 h-3 text-destructive" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
