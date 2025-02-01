import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { MessageCircle, Group, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import ForumThread from "@/components/ForumThread";

const sampleThreads = [
  {
    id: "1",
    title: "Tips for Starting Your Creative Journey",
    author: "Sarah Johnson",
    content: "Starting your creative journey can be daunting, but here are some tips that helped me...",
    replies: 15,
    lastActivity: "2024-03-20",
    category: "Career Development"
  },
  {
    id: "2",
    title: "Collaboration Opportunities in Tech",
    author: "Michael Chen",
    content: "Looking for developers interested in working on an open-source project...",
    replies: 23,
    lastActivity: "2024-03-19",
    category: "Technology"
  },
  {
    id: "3",
    title: "Writing Workshop Discussion",
    author: "Emma Williams",
    content: "Let's share our experiences from the recent writing workshop...",
    replies: 8,
    lastActivity: "2024-03-18",
    category: "Writing"
  }
];

const sampleGroups = [
  {
    id: "1",
    name: "Tech Enthusiasts",
    description: "A group for sharing and discussing the latest in technology",
    members: 156,
    category: "Technology"
  },
  {
    id: "2",
    name: "Young Writers Circle",
    description: "Support and feedback for aspiring writers",
    members: 89,
    category: "Writing"
  },
  {
    id: "3",
    name: "Digital Artists",
    description: "Showcase your work and connect with other artists",
    members: 124,
    category: "Art"
  }
];

const sampleEvents = [
  {
    id: "1",
    title: "Web Development Workshop",
    date: "2024-04-15",
    type: "Workshop",
    description: "Learn the basics of modern web development"
  },
  {
    id: "2",
    title: "Creative Writing Webinar",
    date: "2024-04-20",
    type: "Webinar",
    description: "Improve your storytelling skills"
  },
  {
    id: "3",
    title: "Tech Innovation Competition",
    date: "2024-05-01",
    type: "Competition",
    description: "Showcase your innovative tech solutions"
  }
];

const Community = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Community</h1>

        <Tabs defaultValue="forums" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="forums" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Forums
            </TabsTrigger>
            <TabsTrigger value="groups" className="flex items-center gap-2">
              <Group className="h-4 w-4" />
              Groups
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="forums">
            <div className="grid gap-6">
              {sampleThreads.map((thread) => (
                <Card key={thread.id} className="p-0">
                  <ForumThread thread={thread} />
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="groups">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sampleGroups.map((group) => (
                <Card key={group.id}>
                  <CardHeader>
                    <CardTitle>{group.name}</CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {group.category}
                      </span>
                      <span className="text-muted-foreground">
                        {group.members} members
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-4">
                {sampleEvents.map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        {new Date(event.date).toLocaleDateString()} • {event.type}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;
