import React, { useState, useEffect } from "react";
import { blogPosts } from "../data/blogs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackPageView, trackBlogView } from "@/lib/analytics";

const BlogList: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  useEffect(() => {
    trackPageView("blog");
  }, []);

  // Collect all unique tags from all posts
  const allTags = ["All", ...Array.from(new Set(blogPosts.flatMap(post => post.tags || [])))];

  const filteredPosts = selectedTag === "All"
    ? blogPosts
    : blogPosts.filter(post => post.tags?.includes(selectedTag));

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Apna Website <span className="text-gradient">Blog</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tips, guides, and trends to help small businesses succeed online.
        </p>
      </div>

      {/* Tag Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedTag === tag
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {tag === "All" ? "All Posts" : `#${tag}`}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No posts found with tag #{selectedTag}.
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-card text-card-foreground rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border flex flex-col h-full overflow-hidden group hover:-translate-y-1"
            >
              <Link
                to={`/blog/${post.id}`}
                onClick={() => trackBlogView(post.id, post.title)}
                className="flex flex-col h-full"
              >
                {post.coverImage && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Post Meta */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="mt-auto pt-4 flex flex-wrap gap-1.5 border-t border-border/50">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          selectedTag === tag
                            ? "bg-primary/20 text-primary border border-primary/20"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="mt-20 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-accent p-8 md:p-12 text-center text-primary-foreground shadow-elevated max-w-4xl mx-auto animate-fade-in">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
          Ready to build your business website?
        </h2>
        <p className="max-w-md mx-auto text-primary-foreground/80 mb-8 text-sm sm:text-base">
          Launch a professional website for your gym, salon, clinic, restaurant or shop in just 5 minutes. No technical skills required!
        </p>
        <Link to="/templates">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 font-bold shadow-lg">
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
