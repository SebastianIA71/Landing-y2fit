import { cn } from "@/lib/utils";

export default function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const track = (
    <div className="flex shrink-0 gap-14 whitespace-nowrap font-display text-[15px] uppercase tracking-[0.14em] text-border2">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-14">
          {item}
          <span className="text-volt">·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div aria-hidden="true" className="overflow-hidden border-b border-surface bg-ink py-5">
      <div
        className={cn(
          "flex w-max motion-safe:animate-marquee",
          reverse && "motion-safe:animate-marquee-reverse"
        )}
      >
        {track}
        {track}
      </div>
    </div>
  );
}
