import { useEffect, useRef } from 'react';

interface ScrollBarProps {
  containerRef: React.RefObject<HTMLElement | null>;
  thumbWidth: number;
}

export function ScrollBar({ containerRef, thumbWidth }: ScrollBarProps) {
  const trackRef = useRef<HTMLDivElement>(null);

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

    container.addEventListener('scroll', syncFromContainer);

    return () => {
      container.removeEventListener('scroll', syncFromContainer);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="w-full h-2 bg-primary-50 rounded-full overflow-x-auto scrollbar-hidden">
      <div className="h-full bg-primary-100 rounded-full" style={{ width: `${thumbWidth}%` }} />
    </div>
  );
}
