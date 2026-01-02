import { supabase } from "@/integrations/supabase/client";

interface BlogImage {
  position: string;
  image_url: string;
  image_meta_description: string;
}

interface CreateBlogPostParams {
  language: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  author_bio?: string;
  category: string;
  tags: string[];
  cover_image: string;
  cover_image_alt: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
  read_time?: number;
  status?: string;
  images?: BlogImage[];
}

export async function createBlogPost(params: CreateBlogPostParams) {
  console.log("Creating blog post with params:", {
    title: params.title,
    language: params.language,
    imageCount: params.images?.length || 0,
  });

  const { data, error } = await supabase.functions.invoke("create-blog-post", {
    body: params,
  });

  if (error) {
    console.error("Error creating blog post:", error);
    throw error;
  }

  console.log("Blog post created successfully:", data);
  return data;
}

// Helper to convert local file to base64
export async function fileToBase64(filePath: string): Promise<string> {
  try {
    const response = await fetch(filePath);
    const blob = await response.blob();
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error converting file to base64:", error);
    throw error;
  }
}
