import React from "react";
import { blogPosts } from "../data/blogs";
import { Link } from "react-router-dom";

const BlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 p-3 border border-neutral-200 dark:border-neutral-800 flex flex-col h-full transform hover:scale-105 z-10 hover:z-20"
          >
            <Link to={`/blog/${post.id}`} className="block group h-full">
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-32 object-cover rounded mb-3 group-hover:opacity-90 transition"
                />
              )}
              <h2 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h2>
              <div className="text-xs text-neutral-500 mb-1">
                {post.date} • {post.author}
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-1 line-clamp-3">
                {post.summary}
              </p>
              {post.tags && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
