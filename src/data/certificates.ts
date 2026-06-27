import c1 from "@/assets/cert-1.jpg";
import c2 from "@/assets/cert-2.jpg";
import c3 from "@/assets/cert-3.jpg";

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export const certificates: Certificate[] = [
  { id: 1, title: "Professional Makeup Artistry", issuer: "Academy of Beauty Arts", year: "2021", image: c1 },
  { id: 2, title: "Advanced Bridal Makeup", issuer: "Glam Studio Institute", year: "2022", image: c2 },
  { id: 3, title: "Hair Styling Masterclass", issuer: "Elite Hair Academy", year: "2023", image: c3 },
];