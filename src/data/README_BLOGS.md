# Blog Feature: How to Add New Blogs

To add a new blog post, follow these steps:

1. **Open** `src/data/blogs.ts`.
2. **Add a new object** to the `blogPosts` array with the following fields:
   - `id`: Unique string (used in the URL, e.g., "my-first-post").
   - `title`: Blog post title.
   - `date`: Date in YYYY-MM-DD format.
   - `author`: Author name.
   - `summary`: Short summary for the blog list.
   - `content`: HTML string for the blog content (can use headings, paragraphs, images, etc.).
   - `coverImage` (optional): Path to a cover image (e.g., `/assets/blog/my-image.jpg`).
   - `tags` (optional): Array of tags (e.g., `["business", "tips"]`).

3. **(Optional)**: Add a cover image to `public/assets/blog/` and reference it in your blog object.

---

**Example:**

```
{
  id: "my-first-post",
  title: "My First Blog Post",
  date: "2026-02-14",
  author: "Jane Doe",
  summary: "A quick intro to our new blog feature!",
  content: `
    <h2>Welcome!</h2>
    <p>This is my first post. You can use <strong>HTML</strong> for formatting.</p>
  `,
  coverImage: "/assets/blog/my-image.jpg",
  tags: ["introduction", "news"]
}
```

**That's it!** Your new blog will appear on the Blog page automatically.
