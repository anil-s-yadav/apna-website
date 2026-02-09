export type Template = {
  id: number;
  name: string;
  category: "Gym" | "Teacher" | "YouTuber" | "Shop";
  image: string;
};

export const templates: Template[] = [
  { id: 1, name: "FitZone Pro", category: "Gym", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" },
  { id: 2, name: "IronCore Gym", category: "Gym", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop" },
  { id: 3, name: "LearnHub", category: "Teacher", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" },
  { id: 4, name: "EduConnect", category: "Teacher", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop" },
  { id: 5, name: "TubeStudio", category: "YouTuber", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop" },
  { id: 6, name: "CreatorSpace", category: "YouTuber", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop" },
  { id: 7, name: "ShopEasy", category: "Shop", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop" },
  { id: 8, name: "RetailPro", category: "Shop", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" },
  { id: 9, name: "PowerLift", category: "Gym", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop" },
  { id: 10, name: "ClassRoom+", category: "Teacher", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" },
];

export const categories = ["All", "Gym", "Teacher", "YouTuber", "Shop"] as const;
