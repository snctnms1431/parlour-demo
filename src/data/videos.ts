export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
}

// Replace youtubeId with your own Unlisted YouTube video IDs.
export const videos: Video[] = [
  { id: "v1", youtubeId: "ScMzIvxBSi4", title: "Bridal Makeup Showcase", category: "Bridal Transformation" },
  { id: "v2", youtubeId: "ScMzIvxBSi4", title: "HD Glam Tutorial", category: "Makeup Showcase" },
  { id: "v3", youtubeId: "ScMzIvxBSi4", title: "Happy Bride Feedback", category: "Customer Feedback" },
];