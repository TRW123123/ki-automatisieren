import { BlogPost } from "@/data/blogData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
  currentLanguage: string;
}

export const BlogCard = ({ post, currentLanguage }: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-card border border-border/50 hover-glow">
      <CardHeader className="p-0">
        {post.image && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                {post.category}
              </Badge>
            </div>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime} Min.
          </div>
          <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        <Link
          to={`/blog/${post.id}`}
          className="hover:text-primary transition-colors"
        >
          {post.title}
        </Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-glow transition-colors"
        >
          Weiterlesen →
        </Link>
      </CardContent>
    </Card>
  );
};