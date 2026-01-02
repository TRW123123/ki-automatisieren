import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogCard, { type BlogPost } from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/lib/routeMappings";
import { supabase } from "@/integrations/supabase/client";

const Blog = () => {
  const { t, currentLanguage } = useLanguage();
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  
  const pageSize = 12;
  const currentPage = Math.max(1, Number(searchParams.get("page") ?? 1));
  const start = (currentPage - 1) * pageSize;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Get total count
        const { count } = await supabase
          .from("blog_posts")
          .select("*", { count: "exact", head: true })
          .eq("language", currentLanguage)
          .eq("status", "published");

        setTotal(count || 0);

        // Get paginated posts
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("language", currentLanguage)
          .eq("status", "published")
          .order("published_at", { ascending: false })
          .range(start, start + pageSize - 1);

        if (error) {
          console.error("Error fetching posts:", error);
          setPosts([]);
        } else {
          // Transform to BlogPost format
          const transformedPosts: BlogPost[] = (data || []).map((post) => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            coverImage: post.cover_image_url || "/placeholder.svg",
            date: new Date(post.published_at || post.created_at).toISOString().split("T")[0],
            readTime: `${post.read_time} dk`,
            author: post.author,
            tags: post.tags || [],
          }));
          setPosts(transformedPosts);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentLanguage, start]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <main style={{ background: "#0B0F14" }} className="min-h-screen">
      <SEO 
        title={t('blog.seo.title')}
        description={t('blog.seo.description')}
        routeKey="blog"
      />
      
      <section className="relative mx-auto w-full max-w-6xl px-4 pt-12 md:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(163,230,53,0.18), transparent 60%)",
            filter: "blur(24px)",
          }}
        />
        <h1
          className="text-3xl md:text-5xl font-semibold tracking-tight"
          style={{ color: "#E5E7EB" }}
        >
          {t('blog.hero.title')}
        </h1>
        <p
          className="mt-3 max-w-[65ch] text-base md:text-lg"
          style={{ color: "#94A3B8" }}
        >
          {t('blog.hero.subtitle')}
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16">
        {loading ? (
          <div className="mt-8 text-center" style={{ color: "#94A3B8" }}>
            Yükleniyor...
          </div>
        ) : posts.length === 0 ? (
          <div className="mt-8 text-center" style={{ color: "#94A3B8" }}>
            Noch keine Blog-Posts vorhanden.
          </div>
        ) : (
          <>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={getLocalizedRoute(currentLanguage, 'blog')}
            />
          </>
        )}
      </section>
    </main>
  );
};

export default Blog;