import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";
import p9 from "@/assets/portfolio-9.jpg";
import p10 from "@/assets/portfolio-10.jpg";
import p11 from "@/assets/portfolio-11.jpg";
import p12 from "@/assets/portfolio-12.jpg";
import p13 from "@/assets/portfolio-13.jpg";
import p14 from "@/assets/portfolio-14.jpg";
import p15 from "@/assets/portfolio-15.jpg";
import p16 from "@/assets/portfolio-16.jpg";
import p17 from "@/assets/portfolio-17.jpg";
import p18 from "@/assets/portfolio-18.jpg";




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
  { id: 1, image: p1, category: "HD", alt: "Bride in red lehenga with traditional bridal makeup" },
  { id: 2, image: p2, category: "hd bridal", alt: "Glamorous party makeup with smoky eyes" },
  { id: 3, image: p3, category: "reception", alt: "HD makeup look with dewy glowing skin" },
  { id: 4, image: p4, category: "bridal", alt: "Bride in yellow outfit for haldi ceremony" },
  { id: 5, image: p5, category: "traditional", alt: "Bride in reception gown with glam makeup" },
  { id: 6, image: p6, category: "haldi", alt: "Engagement soft glam makeup look" },
  { id: 7, image: p7, category: "reception", alt: "Traditional bridal look with gold jewelry" },
  { id: 8, image: p8, category: "wedding", alt: "Festive party makeup with shimmer" },
  { id: 9, image: p9, category: "engagement", alt: "Festive party makeup with shimmer" },
  { id: 10, image: p10, category: "haldi", alt: "Festive party makeup with shimmer" },
  { id: 11, image: p11, category: "traditional", alt: "Festive party makeup with shimmer" },
  { id: 12, image: p12, category: "Party", alt: "Festive party makeup with shimmer" },
  { id: 13, image: p13, category: "baby makeup", alt: "Festive party makeup with shimmer" },
  { id: 14, image: p14, category: "Eye Makeup", alt: "Festive party makeup with shimmer" },
  { id: 15, image: p15, category: "traditional", alt: "Festive party makeup with shimmer" },
  { id: 16, image: p16, category: "baby shower", alt: "Festive party makeup with shimmer" },
  { id: 17, image: p17, category: "traditional", alt: "Festive party makeup with shimmer" },
  { id: 18, image: p18, category: "Eye Makeup", alt: "Festive party makeup with shimmer" },



];