import bridal from "@/assets/service-bridal.jpg";
import party from "@/assets/service-party.jpg";
import hd from "@/assets/service-hd.jpg";
import hair from "@/assets/service-hair.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import engage from "@/assets/service-engage.jpg";
import recep from "@/assets/service-recep.jpg";
import pw from "@/assets/service-pre.jpg";
import bs from "@/assets/service-baby.jpg";
import cp from "@/assets/service-cp.jpg";
import wx from "@/assets/service-wax.jpg";
import hc from "@/assets/service-hc.jpg";
import hcl from "@/assets/service-hcl.jpg";
import eye from "@/assets/service-eye.jpg";
import saree from "@/assets/service-saree.jpg";
import basic from "@/assets/service-basic.jpg";

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
    name: "Bridal HD Makeup - 3 look package",
    price: "₹12,000",
    duration: "2 hours",
    description: "Flawless HD finish that looks stunning both in person and on camera.",
    image: hd,
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    price: "₹8,000",
    duration: "3 hours",
    description: "Luxurious bridal makeover crafted to make your special day unforgettable.",
    image: bridal,
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    price: "₹1,500",
    duration: "1.5 hours",
    description: "Glamorous evening look with shimmer, contour and a long-lasting finish.",
    image: party,
  },
  {
    id: "engagement-makeup",
    name: "Engagement Makeup",
    price: "₹5,000",
    duration: "2 hours",
    description: "Romantic soft-glam tailored to make your engagement day unforgettable.",
    image: engage,
  },
  {
    id: "reception-makeup",
    name: "Reception Makeup",
    price: "₹10,000",
    duration: "2.5 hours",
    description: "Sophisticated, photo-ready glam for your grand reception evening.",
    image: recep,
  },
  {
    id: "pre-wedding",
    name: "Pre-Wedding Makeup",
    price: "₹6,000",
    duration: "45 mins",
    description: "Picture-perfect makeup created for your pre-wedding photoshoots and events.",
    image: pw,
  },
  {
    id: "baby-shower",
    name: "Baby Shower Makeup",
    price: "₹3,500",
    duration: "45 mins",
    description: "Soft, graceful makeup to celebrate your beautiful motherhood journey."
,
    image: bs,
  },
  {
    id: "basic-makeup",
    name: "Sider Makeup",
    price: "₹10,000",
    duration: "1 hour",
    description: "Fresh, natural everyday glam perfect for casual events and gatherings.",
    image: basic,
  },
  {
    id: "cleanup",
    name: "Clean-Up",
    price: "₹350",
    duration: "45 mins",
    description: "Deep cleansing treatment that refreshes and revitalizes your skin.",
    image: cp,
  },
  {
    id: "waxing",
    name: "Waxing",
    price: "₹400-500",
    duration: "45 mins",
    description: "Smooth and hygienic waxing service for soft, silky skin.",
    image: wx,
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    price: "₹300",
    duration: "1.5 hours",
    description: "Beautiful hairstyles including curls, buns and elegant bridal looks.",
    image: hair,
  },
  {
    id: "hair-cut",
    name: "Hair Cut",
    price: "₹500",
    duration: "45 mins",
    description: "Professional haircut tailored to suit your face shape and style.",
    image: hc,
  },
  {
    id: "hair-colouring",
    name: "Hair Colouring",
    price: "₹300",
    duration: "45 mins",
    description: "Rich, vibrant hair colouring for a fresh and stylish transformation.",
    image: hcl,
  },
  {
    id: "eyebrows",
    name: "Eyebrows",
    price: "₹40",
    duration: "45 mins",
    description: "Perfectly shaped eyebrows to enhance your natural facial features.",
    image: eye,
  },
  {
    id: "saree-draping",
    name: "Saree Draping",
    price: "₹200",
    duration: "45 mins",
    description: "Expert saree and dupatta draping in classic and modern styles.",
    image: saree,
  },
];