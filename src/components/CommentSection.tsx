import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { MessageSquare, PlusCircle } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { Separator } from "./ui/separator";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  threadId: string;
  comments: Comment[];
}

const CommentSection = ({ threadId, comments: initialComments }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");
  const { toast } = useToast();

  const handleAddComment = () => {
    if (!newComment.trim()) {
      toast({
        title: "Error",
        description: "Comment cannot be empty",
        variant: "destructive",
      });
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Current User", // This would come from auth context in a real app
      content: newComment,
      timestamp: new Date().toISOString(),
    };

    setComments([...comments, comment]);
    setNewComment("");
    toast({
      title: "Success",
      description: "Comment added successfully",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Comments ({comments.length})</h3>
      </div>

      <Separator className="my-4" />

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="group rounded-lg bg-accent/5 p-4 transition-all duration-200 hover:bg-accent/10"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-primary">{comment.author}</span>
              <span className="text-sm text-muted-foreground">
                {new Date(comment.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">{comment.content}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px] resize-none focus-visible:ring-primary"
        />
        <Button
          onClick={handleAddComment}
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <PlusCircle className="h-4 w-4" />
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;