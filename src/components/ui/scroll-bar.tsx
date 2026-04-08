import { cn } from "@/utils/utils";
import { useEffect, useRef } from "react";

interface ScrollBarProps {
  containerRef: React.RefObject<HTMLElement | null>;
  thumbWidth: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function ScrollBar({
  containerRef,
  thumbWidth,
  orientation = "horizontal",
  className,
}: ScrollBarProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const trackClass =
    orientation === "horizontal" ? "w-full h-1.25" : "w-1.25 h-full";
  const thumbClass = orientation === "horizontal" ? "h-full" : "w-full";
  const defaultClasses =
    orientation === "horizontal"
      ? "w-full h-max absolute bottom-0"
      : "w-max h-full absolute bottom-0 right-0";

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const syncFromContainer = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      const progress = container.scrollLeft / maxScroll;

      const trackWidth = track.clientWidth;
      const thumb = track.firstElementChild as HTMLElement;
      const thumbWidthPx = thumb.offsetWidth;

      const maxTranslate = trackWidth - thumbWidthPx;

      thumb.style.transform = `translateX(${progress * maxTranslate}px)`;
    };

    container.addEventListener("scroll", syncFromContainer);

    return () => {
      container.removeEventListener("scroll", syncFromContainer);
    };
  }, []);

  return (
    <div className={cn(defaultClasses, className)}>
      <div
        ref={trackRef}
        data-orientation={orientation}
        className={`${trackClass} bg-border/50 overflow-x-auto rounded-full scrollbar-hidden`}
      >
        <div
          className={`${thumbClass} bg-border/75 rounded-full`}
          style={{ width: `${thumbWidth}%` }}
        />
      </div>
    </div>
  );
}
