import c1 from "@/assets/cert-1.jpg";
import c2 from "@/assets/cert-2.jpg";
import c3 from "@/assets/cert-3.jpg";
import c4 from "@/assets/cert-4.jpg";



export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export const certificates: Certificate[] = [
  { id: 1, title: "Makeup & Hairstyle Diploma", issuer: "Bharati Makeup & Hair Academy", year: "2024-25", image: c1 },
  { id: 2, title: "Makeup with Grade A - Beauty & Wellness", issuer: "Yuva Parivartan Academy", year: "2024", image: c2 },
  { id: 3, title: "Certificate Course in Professional Beauty Parlour", issuer: "Yuva Parivartan Academy", year: "2016", image: c3 },
  { id: 4, title: "Beauty Care Course", issuer: "The Vatsalya Foundation", year: "2017", image: c4 }

];