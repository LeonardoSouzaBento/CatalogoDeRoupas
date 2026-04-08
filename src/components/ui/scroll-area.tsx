import { useMouseScrollX } from "@/hooks";
import { cn } from "@/utils/utils";
import React, { useEffect, useRef } from "react";

const ScrollAreaContext = React.createContext<{
  parentRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
} | null>(null);

interface ScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  resizeCount?: number;
  ScrollBar?: React.ElementType;
}

export const ScrollContainer = React.forwardRef<
  HTMLDivElement,
  ScrollContainerProps
>(
  (
    {
      children,
      className,
      resizeCount = 0,
      ScrollBar: ScrollBarComponent,
      ...props
    },
    ref,
  ) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => parentRef.current as HTMLDivElement);

    const { thumbWidth } = useMouseScrollX({
      parentRef,
      containerRef,
      resizeCount,
    });

    return (
      <ScrollAreaContext.Provider value={{ parentRef, containerRef }}>
        <div ref={parentRef} className={cn("crop relative", className)}>
          {children}
          {ScrollBarComponent && (
            <ScrollBarComponent
              containerRef={containerRef}
              thumbWidth={thumbWidth}
              {...props}
            />
          )}
        </div>
      </ScrollAreaContext.Provider>
    );
  },
);

export const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(ScrollAreaContext);
  if (!context) {
    throw new Error("ScrollArea must be used within a ScrollContainer");
  }

  const localRef = context.containerRef;
  React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  return (
    <div
      ref={localRef}
      className={cn("overflow-x-scroll relative scrollbar-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
});

type ScrollBarTrackProps = React.ComponentPropsWithoutRef<"div"> & {
  orientation?: "horizontal" | "vertical";
};

export const ScrollBarTrack = React.forwardRef<
  HTMLDivElement,
  ScrollBarTrackProps
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

type ScrollBarThumbProps = React.ComponentPropsWithoutRef<"div"> & {
  orientation?: "horizontal" | "vertical";
};

export const ScrollBarThumb = React.forwardRef<
  HTMLDivElement,
  ScrollBarThumbProps
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

export interface ScrollBarProps {
  className?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
  thumbWidth?: number;
  orientation?: "horizontal" | "vertical";
  ScrollBarTrack?: React.ElementType;
  ScrollBarThumb?: React.ElementType;
}

export function ScrollBar({
  className,
  containerRef,
  thumbWidth = 0,
  orientation = "horizontal",
  ScrollBarTrack: Track = ScrollBarTrack,
  ScrollBarThumb: Thumb = ScrollBarThumb,
}: ScrollBarProps) {
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
      <Track ref={trackRef} orientation={orientation}>
        <Thumb orientation={orientation} style={{ width: `${thumbWidth}%` }} />
      </Track>
    </div>
  );
}

ScrollContainer.displayName = "ScrollArea";
ScrollArea.displayName = "ScrollArea";
ScrollBarTrack.displayName = "ScrollBarTrack";
ScrollBarThumb.displayName = "ScrollBarThumb";
