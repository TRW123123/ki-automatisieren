import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import ReactMarkdown from "react-markdown";

interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  author_bio?: string;
  date: string;
  category: string;
  tags: string[];
  cover_image_url?: string;
  cover_image_alt?: string;
  read_time: number;
}

const BlogPost = () => {
  const { slug, id } = useParams<{ slug?: string; id?: string }>();
  const slugOrId = slug ?? id;
  const { currentLanguage } = useLanguage();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = window.location.origin;

  useEffect(() => {
    const fetchPost = async () => {
      if (!slugOrId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slugOrId)
          .eq("language", currentLanguage)
          .eq("status", "published")
          .maybeSingle();

        if (error) {
          console.error("Error fetching post:", error);
          setPost(null);
        } else if (data) {
          setPost({
            id: data.id,
            slug: data.slug,
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            author: data.author,
            author_bio: data.author_bio || undefined,
            date: new Date(data.published_at || data.created_at).toISOString().split("T")[0],
            category: data.category,
            tags: data.tags || [],
            cover_image_url: data.cover_image_url || undefined,
            cover_image_alt: data.cover_image_alt || undefined,
            read_time: data.read_time || 5,
          });
        } else {
          setPost(null);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slugOrId, currentLanguage]);

  if (loading) {
    return (
      <main
        className="mx-auto w-full max-w-3xl px-4 py-12 min-h-screen flex items-center justify-center"
        style={{ background: "#0B0F14" }}
      >
        <p style={{ color: "#94A3B8" }}>
          Wird geladen...
        </p>
      </main>
    );
  }

  if (!slugOrId || !post) {
    return (
      <main
        className="mx-auto w-full max-w-3xl px-4 py-12 min-h-screen"
        style={{ background: "#0B0F14" }}
      >
        <h1
          className="text-3xl md:text-4xl font-semibold"
          style={{ color: "#E5E7EB" }}
        >
          Post nicht gefunden
        </h1>
        <p className="mt-4" style={{ color: "#94A3B8" }}>
          Der gesuchte Blog-Post wurde nicht gefunden.
        </p>
      </main>
    );
  }

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pratik Yapay Zeka",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "image": post.cover_image_url || `${baseUrl}/placeholder.svg`,
    "articleBody": post.content.substring(0, 500),
    "keywords": post.tags.join(", "),
    "articleSection": post.category
  };

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        routeKey="blog-post"
        params={{ slug: post.slug }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main
        className="mx-auto w-full max-w-3xl px-4 py-12 min-h-screen"
        style={{ background: "#0B0F14" }}
      >
        {post.cover_image_url && (
          <img
            src={post.cover_image_url}
            alt={post.cover_image_alt || post.title}
            className="w-full h-auto rounded-lg mb-8"
          />
        )}
        
        <h1
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{ color: "#E5E7EB" }}
        >
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mb-6" style={{ color: "#94A3B8" }}>
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.read_time} Min</span>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm"
                style={{
                  background: "rgba(163, 230, 53, 0.1)",
                  color: "#A3E635",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

        {post.author_bio && (
          <div
            className="mt-12 p-6 rounded-lg"
            style={{ background: "rgba(255, 255, 255, 0.05)" }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "#E5E7EB" }}
            >
              Über den Autor
            </h3>
            <p style={{ color: "#94A3B8" }}>{post.author_bio}</p>
          </div>
        )}
      </main>
    </>
  );
};

export default BlogPost;