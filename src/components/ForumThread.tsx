import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import CommentSection from "./CommentSection";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Badge } from "./ui/badge";

interface ForumThreadProps {
  thread: {
    id: string;
    title: string;
    author: string;
    content: string;
    replies: number;
    lastActivity: string;
    category: string;
  };
}

const ForumThread = ({ thread }: ForumThreadProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2 bg-background/50 rounded-lg border p-4 transition-all duration-200 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex items-center justify-between p-0 hover:bg-transparent"
          >
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                  {thread.title}
                </h3>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {thread.category}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Posted by {thread.author}</span>
                <span>•</span>
                <span>{new Date(thread.lastActivity).toLocaleDateString()}</span>
                <span>•</span>
                <span>{thread.replies} replies</span>
              </div>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-4 pt-4">
        <div className="prose prose-sm max-w-none">
          <p className="text-foreground/90 leading-relaxed">{thread.content}</p>
        </div>
        <CommentSection
          threadId={thread.id}
          comments={[
            {
              id: "1",
              author: "Jane Doe",
              content: "Great discussion point!",
              timestamp: "2024-02-01T10:00:00Z",
            },
            // Add more sample comments as needed
          ]}
        />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ForumThread;