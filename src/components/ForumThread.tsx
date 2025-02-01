import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import CommentSection from "./CommentSection";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

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
      className="w-full space-y-2"
    >
      <div className="flex items-center justify-between">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex items-center justify-between p-4"
          >
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold">{thread.title}</h3>
              <p className="text-sm text-muted-foreground">
                Posted by {thread.author} • {new Date(thread.lastActivity).toLocaleDateString()}
              </p>
            </div>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="px-4">
        <div className="prose prose-sm max-w-none">
          <p className="mb-4">{thread.content}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
              {thread.category}
            </span>
          </div>
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