import bridal from "@/assets/service-bridal.jpg";
import party from "@/assets/service-party.jpg";
import hd from "@/assets/service-hd.jpg";
import hair from "@/assets/service-hair.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "hd-makeup",
    name: "HD Makeup",
    price: "₹6,000",
    duration: "2 hours",
    description: "Flawless high-definition finish designed for photography and long-wear.",
    image: hd,
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    price: "₹15,000",
    duration: "3 hours",
    description: "Complete luxury bridal look with skincare prep, lashes & premium products.",
    image: bridal,
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    price: "₹4,500",
    duration: "1.5 hours",
    description: "Glamorous evening look with shimmer, contour and a long-lasting finish.",
    image: party,
  },
  {
    id: "engagement-makeup",
    name: "Engagement Makeup",
    price: "₹8,000",
    duration: "2 hours",
    description: "Romantic soft-glam tailored to make your engagement day unforgettable.",
    image: portfolio6,
  },
  {
    id: "reception-makeup",
    name: "Reception Makeup",
    price: "₹10,000",
    duration: "2.5 hours",
    description: "Sophisticated, photo-ready glam for your grand reception evening.",
    image: portfolio5,
  },
  {
    id: "basic-makeup",
    name: "Basic Makeup",
    price: "₹2,500",
    duration: "1 hour",
    description: "Fresh, natural everyday glam perfect for casual events and gatherings.",
    image: portfolio3,
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    price: "₹3,500",
    duration: "1.5 hours",
    description: "Elegant updos, curls and bridal hairstyling with fresh floral accents.",
    image: hair,
  },
  {
    id: "saree-draping",
    name: "Saree Draping",
    price: "₹1,500",
    duration: "45 mins",
    description: "Expert saree and dupatta draping in classic and modern styles.",
    image: portfolio1,
  },
];