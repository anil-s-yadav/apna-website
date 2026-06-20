import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackPageView, trackBlogView } from "@/lib/analytics";

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    trackPageView("blog-post");
    if (post) {
      trackBlogView(post.id, post.title);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  // Find related posts (exclude current, score by matching tags count, take top 3)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .map((p) => {
      const matchCount = p.tags?.filter((tag) => post.tags?.includes(tag)).length || 0;
      return { post: p, matchCount };
    })
    .filter((item) => item.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 3)
    .map((item) => item.post);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link
        to="/blog"
        className="text-primary hover:underline mb-6 inline-flex items-center gap-1 text-sm font-medium"
      >
        ← Back to Blog
      </Link>

      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-80 object-cover rounded-3xl mb-8 shadow-card animate-fade-in"
        />
      )}

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight text-foreground">
        {post.title}
      </h1>

      <div className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
        <span>{post.date}</span>
        <span>•</span>
        <span>By {post.author}</span>
      </div>

      {/* Styled Article Content */}
      <article
        className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:list-disc prose-ol:list-decimal"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags && (
        <div className="flex flex-wrap gap-2 mt-8 mb-12">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA Banner */}
      <div className="my-16 rounded-2xl bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Build Your Website with Apna Website</h3>
          <p className="text-sm text-primary-foreground/80 max-w-md">
            Get a professional website for your small business. Ready-made templates, fast setup, and secure hosting.
          </p>
        </div>
        <Link to="/templates">
          <Button className="bg-white text-primary hover:bg-white/90 font-bold px-6 shadow-sm">
            Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="border-t border-border pt-12">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Related Posts</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedPosts.map((rp) => (
              <div key={rp.id} className="group">
                <Link to={`/blog/${rp.id}`} className="block">
                  {rp.coverImage && (
                    <img
                      src={rp.coverImage}
                      alt={rp.title}
                      className="w-full h-32 object-cover rounded-xl mb-3 group-hover:opacity-90 transition shadow-sm"
                    />
                  )}
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm line-clamp-2 leading-snug">
                    {rp.title}
                  </h4>
                  <span className="text-[11px] text-muted-foreground block mt-1">{rp.date}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
