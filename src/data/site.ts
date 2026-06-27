export const site = {
  name: "Nandini MakeOver",
  fullName: "Nandini Makeover Beauty Studio",
  tagline: "Unveiling Your Radiant Essence",
  description:
    "Premium makeup artistry tailored for the modern bride and luxury celebrations.",
  established: "2021",
  phone: "9067524172",
phoneDisplay: "+91 90675 24172",
  whatsapp: "919067524172",
  email: "studio@aurabeauty.com",
  address: "123 Luxury Lane, Fashion District",
  instagram: "https://www.instagram.com/chaudhri_nandini____?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  instagramHandle: "@nandini.makeover",
  facebook: "https://facebook.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.985!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNDDCsDQ0JzUzLjAiTiA3M8KwNTknMDYuMCJX!5e0!3m2!1sen!2sus!4v1700000000000",
  rating: 4.9,
  reviewCount: 128,
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const bookingMessage =
  "Hello, I would like to book an appointment.\n\nService:\nName:\nDate:\nTime:";

export function serviceBookingMessage(serviceName: string) {
  return `Hello, I would like to book ${serviceName}.\n\nName:\nDate:\nTime:`;
} 