import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";

export interface GalleryItem {
  id: number;
  image: string;
  category: string;
  alt: string;
}

export const categories = [
  "All",
  "Bridal",
  "Party",
  "HD Makeup",
  "Traditional",
  "Reception",
  "Haldi",
  "Engagement",
];

export const gallery: GalleryItem[] = [
  { id: 1, image: p1, category: "Bridal", alt: "Bride in red lehenga with traditional bridal makeup" },
  { id: 2, image: p2, category: "Party", alt: "Glamorous party makeup with smoky eyes" },
  { id: 3, image: p3, category: "HD Makeup", alt: "HD makeup look with dewy glowing skin" },
  { id: 4, image: p4, category: "Haldi", alt: "Bride in yellow outfit for haldi ceremony" },
  { id: 5, image: p5, category: "Reception", alt: "Bride in reception gown with glam makeup" },
  { id: 6, image: p6, category: "Engagement", alt: "Engagement soft glam makeup look" },
  { id: 7, image: p7, category: "Traditional", alt: "Traditional bridal look with gold jewelry" },
  { id: 8, image: p8, category: "Party", alt: "Festive party makeup with shimmer" },
];