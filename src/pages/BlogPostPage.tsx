import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogs";

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Link
        to="/blog"
        className="text-primary hover:underline mb-4 inline-block"
      >
        ← Back to Blog
      </Link>
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-neutral-500 mb-6">
        {post.date} • {post.author}
      </div>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {post.tags && (
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
