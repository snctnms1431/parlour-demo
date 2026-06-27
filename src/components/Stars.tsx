import { Star } from "lucide-react";

export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className ?? ""}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < Math.round(rating) ? "fill-gold text-gold" : "text-gold/30"}`}
        />
      ))}
    </div>
  );
}