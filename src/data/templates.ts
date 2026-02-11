export type Template = {
  id: number;
  name: string;
  category: "Gym" | "Teacher" | "YouTuber" | "Shop";
  image: string;
  preview: string;
};

export const templates: Template[] = [
  {
    id: 1,
    name: "FitZone Pro",
    category: "Gym",
    image:
      "https://themewagon.com/wp-content/uploads/2020/06/fitnessclub-1.jpg",
    preview: "https://themewagon.github.io/fitnessclub/",
  },
  {
    id: 2,
    name: "IronCore Gym",
    category: "Gym",
    image: "https://themewagon.com/wp-content/uploads/2019/10/workout.jpg",
    preview: "https://themewagon.github.io/xgym/",
  },
  {
    id: 3,
    name: "Yaleena Classes",
    category: "Teacher",
    image:
      "https://themewagon.com/wp-content/uploads/2025/05/E-learning-1200x736.webp",
    preview: "https://themewagon.github.io/E-learning/",
  },
  {
    id: 4,
    name: "Edukate",
    category: "Teacher",
    image:
      "https://themewagon.com/wp-content/uploads/2025/04/Edukate-1200x736.webp",
    preview: "https://themewagon.github.io/Edukate/",
  },
  {
    id: 5,
    name: "xtrady",
    category: "YouTuber",
    image:
      "https://market-resized.envatousercontent.com/previews/files/646816434/00_Preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=30f39dcf5703acc591598403dcdc54774a40350a5eb5146058f6faa65d062c10",
    preview: "https://photoclerks.com/html/xtrady-update/xtrady/index.html",
  },
  {
    id: 6,
    name: "CreatorSpace",
    category: "YouTuber",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    preview: "",
  },
  {
    id: 7,
    name: "ShopEasy",
    category: "Shop",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    preview: "",
  },
  {
    id: 8,
    name: "RetailPro",
    category: "Shop",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    preview: "",
  },
  {
    id: 9,
    name: "yogalax",
    category: "Gym",
    image: "https://themewagon.com/wp-content/uploads/2020/08/Yogalax.png",
    preview: "https://themewagon.github.io/yogalax/",
  },
  {
    id: 10,
    name: "ClassRoom+",
    category: "Teacher",
    image:
      "https://themewagon.com/wp-content/uploads/2022/05/kidkinder-1200x736.webp",
    preview: "https://themewagon.github.io/kidkinder/",
  },
];

export const categories = [
  "All",
  "Gym",
  "Teacher",
  "YouTuber",
  "Shop",
] as const;
