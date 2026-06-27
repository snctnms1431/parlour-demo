export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: 1,
    question: "Do you provide home service?",
    answer:
      "Yes! We offer on-location services for bridal and special occasions. A travel charge may apply depending on the distance. We also welcome you at our cozy home studio.",
  },
  {
    id: 2,
    question: "How much advance payment is required?",
    answer:
      "A 30% advance is required to confirm and reserve your booking date, especially for bridal appointments. The balance is payable on the day of the service.",
  },
  {
    id: 3,
    question: "Do you travel outside the city?",
    answer:
      "Absolutely. We travel for destination weddings and outstation events. Travel and accommodation charges are discussed at the time of booking.",
  },
  {
    id: 4,
    question: "Which products do you use?",
    answer:
      "We use only premium, skin-friendly and long-lasting professional brands to ensure a flawless finish that stays perfect all day and night.",
  },
  {
    id: 5,
    question: "How early should I book for my wedding?",
    answer:
      "We recommend booking at least 1–2 months in advance for weddings, as peak season dates fill up quickly. Reach out on WhatsApp to check availability.",
  },
];