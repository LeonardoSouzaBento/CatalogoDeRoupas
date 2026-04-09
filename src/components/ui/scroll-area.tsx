import { useMouseScrollX } from "@/hooks";
import { cn } from "@/utils/utils";
import React, { useRef } from "react";
import { ScrollBar as ScrollBarComponent } from "./scroll-bar-copy";

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
      ScrollBar = ScrollBarComponent,
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
          {ScrollBar && (
            <ScrollBar
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

ScrollContainer.displayName = "ScrollArea";
ScrollArea.displayName = "ScrollArea";
