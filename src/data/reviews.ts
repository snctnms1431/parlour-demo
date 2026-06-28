export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Amruta Thakre",
    rating: 5,
    comment:
      "Nandini Makeovers made me feel like the most beautiful version of myself on my wedding day. The makeup lasted all night and looked flawless in every photo!",
    service: "Bridal Makeup",
    date: "April 2024",
  },
  {
    id: 2,
    name: "Swara Padwal",
    rating: 5,
    comment:
      "Absolutely loved my HD makeup for the reception. So professional, gentle and attentive to every detail. Highly recommend!",
    service: "Reception Makeup",
    date: "March 2024",
  },
  {
    id: 3,
    name: "Navya Chaudhari",
    rating: 5,
    comment:
      "The home studio is gorgeous and so relaxing. My engagement look was exactly what I dreamed of. Thank you so much!",
    service: "Engagement Makeup",
    date: "February 2024",
  },
  {
    id: 4,
    name: "Varsha Chaudhari",
    rating: 4,
    comment:
      "Beautiful party makeup that turned heads all evening. Very talented artist with premium products.",
    service: "Party Makeup",
    date: "January 2024",
  },
  {
    id: 5,
    name: "Nila Kadam",
    rating: 5,
    comment:
      "From hair styling to saree draping, everything was perfect. I felt pampered and gorgeous throughout!",
    service: "Bridal Makeup",
    date: "December 2023",
  },
    {
    id: 6,
    name: "Kajal Nimse",
    rating: 5,
    comment:
      "From hair styling to saree draping, everything was perfect. I felt pampered and gorgeous throughout!",
    service: "Bridal Makeup",
    date: "December 2023",
  }
];