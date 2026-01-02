import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/lib/routeMappings";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
};

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { currentLanguage } = useLanguage();
  
  return (
    <article className="group relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-0.5 rounded-xl opacity-20 group-hover:opacity-30 transition duration-300"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(163,230,53,0.18), rgba(163,230,53,0) 60%)",
          filter: "blur(12px)",
        }}
      />
      <Link
        to={`${getLocalizedRoute(currentLanguage, 'blog')}/${post.slug}`}
        className="relative block overflow-hidden rounded-xl border transition duration-300 hover:translate-y-0.5"
        style={{ borderColor: "#1F2937", background: "#111827" }}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-5 group-hover:opacity-10 transition"
            style={{
              background: "linear-gradient(90deg, #A3E635, #34D399)",
              mixBlendMode: "overlay",
            }}
          />
        </div>
        <div className="p-4 md:p-5">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-[12px] font-medium">
            <span style={{ color: "#94A3B8" }}>{post.date}</span>
            <span style={{ color: "#94A3B8" }}>•</span>
            <span style={{ color: "#94A3B8" }}>{post.readTime}</span>
            <span style={{ color: "#94A3B8" }}>•</span>
            <span style={{ color: "#94A3B8" }}>{post.author}</span>
          </div>
          <h3
            className="line-clamp-2 text-[20px] md:text-[22px] font-semibold tracking-tight"
            style={{ color: "#E5E7EB" }}
          >
            {post.title}
          </h3>
          <p
            className="mt-2 line-clamp-3 text-[15px] md:text-[16px]"
            style={{ color: "#94A3B8" }}
          >
            {post.excerpt}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full px-2.5 py-0.5 text-[12px] font-medium"
                style={{
                  color: "#A3E635",
                  border: "1px solid rgba(163,230,53,0.35)",
                  background: "transparent",
                }}
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}