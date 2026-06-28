export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
}

// Replace youtubeId with your own Unlisted YouTube video IDs.
export const videos: Video[] = [
  { id: "v1", youtubeId: "HbRj6LULWdY", title: "Bridal Makeup, Saree Showcase", category: "Bridal Transformation" },
  { id: "v2", youtubeId: "cxmHT0JOOMs", title: "Bridal HD Glam ", category: "Makeup Showcase" },
  { id: "v3", youtubeId: "YkRPzOI12fo", title: "Facial", category: "Customer Feedback" },
  { id: "v4", youtubeId: "VR1nfbRw2gk", title: "Bridal, Saree", category: "Customer Feedback" },

];