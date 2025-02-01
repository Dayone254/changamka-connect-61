import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { MessageSquare, PlusCircle } from "lucide-react";
import { useToast } from "./ui/use-toast";

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
    <div className="space-y-4 mt-4">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Comments ({comments.length})</h3>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 rounded-lg border bg-background/50"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{comment.author}</span>
              <span className="text-sm text-muted-foreground">
                {new Date(comment.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm">{comment.content}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button
          onClick={handleAddComment}
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;