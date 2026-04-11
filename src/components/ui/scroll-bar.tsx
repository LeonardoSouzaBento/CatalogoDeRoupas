"use client";
import { cn } from "@/utils/utils";
import React from "react";
import { useEffect, useRef } from "react";

type TrackAndThumbProps = React.ComponentPropsWithoutRef<"div"> & {
  orientation?: "horizontal" | "vertical";
};

export const ScrollBarTrack = React.forwardRef<
  HTMLDivElement,
  TrackAndThumbProps
>(({ className, orientation = "horizontal", ...props }, ref) => {
  const trackClass =
    orientation === "horizontal" ? "w-full h-1.25" : "w-1.25 h-full";

  return (
    <div
      ref={ref}
      data-orientation={orientation}
      className={cn(
        `${trackClass} bg-border/50 overflow-x-auto rounded-full scrollbar-hidden`,
        className,
      )}
      {...props}
    />
  );
});

export const ScrollBarThumb = React.forwardRef<
  HTMLDivElement,
  TrackAndThumbProps
>(({ className, orientation = "horizontal", ...props }, ref) => {
  const thumbClass = orientation === "horizontal" ? "h-full" : "w-full";

  return (
    <div
      ref={ref}
      className={cn(`${thumbClass} bg-border/75 rounded-full`, className)}
      {...props}
    />
  );
});

export interface ScrollBarType extends React.HTMLAttributes<HTMLDivElement> {
  containerRef?: React.RefObject<HTMLElement | null>;
  thumbWidth?: number;
  orientation?: "horizontal" | "vertical";
  Track?: React.ElementType;
  Thumb?: React.ElementType;
  trackProps?: React.ComponentPropsWithoutRef<"div">;
  thumbProps?: React.ComponentPropsWithoutRef<"div">;
}

export function ScrollBar({
  containerRef,
  thumbWidth = 0,
  orientation = "horizontal",
  Track = ScrollBarTrack,
  Thumb = ScrollBarThumb,
  trackProps,
  thumbProps,
  className,
}: ScrollBarType) {
  const trackRef = useRef<HTMLDivElement>(null);
  const classes =
    orientation === "horizontal"
      ? "w-full h-max absolute bottom-0"
      : "w-max h-full absolute bottom-0 right-0";

  useEffect(() => {
    const container = containerRef?.current;
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
  }, [containerRef]);

  return (
    <div className={cn(classes, className)}>
      <Track
        ref={trackRef}
        orientation={orientation}
        className={cn(trackProps?.className)}
        {...trackProps}
      >
        <Thumb
          orientation={orientation}
          style={{
            width: `${thumbWidth}%`,
            ...thumbProps?.style,
          }}
          className={cn(thumbProps?.className)}
          {...thumbProps}
        />
      </Track>
    </div>
  );
}

ScrollBarTrack.displayName = "ScrollBarTrack";
ScrollBarThumb.displayName = "ScrollBarThumb";
