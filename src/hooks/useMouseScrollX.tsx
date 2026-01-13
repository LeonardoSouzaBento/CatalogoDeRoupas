import { RefObject, useEffect, useRef } from 'react';

type ScrollStart = 'start' | 'center';

interface Params {
  containerRef: RefObject<HTMLElement>;
  scrollWidth: number;
  parentWidth: number;
  scrollStart?: ScrollStart;
}

export function useMouseScrollX({
  containerRef,
  scrollWidth,
  parentWidth,
  scrollStart = 'start',
}: Params) {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // 🔹 Define posição inicial
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (scrollStart === 'center') {
      const centerOffset = Math.max(
        0,
        (scrollWidth - parentWidth) / 2
      );
      el.scrollLeft = centerOffset;
    } else {
      el.scrollLeft = 0;
    }
  }, [scrollStart, scrollWidth, parentWidth, containerRef]);

  // 🔹 Mouse events
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX;
      startScrollLeft.current = el.scrollLeft;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const deltaX = e.pageX - startX.current;
      const nextScroll = startScrollLeft.current - deltaX;

      const maxScroll = scrollWidth - parentWidth;

      el.scrollLeft = Math.max(0, Math.min(nextScroll, maxScroll));
    };

    const stopDragging = () => {
      isDragging.current = false;
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mouseleave', stopDragging);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('mouseleave', stopDragging);
    };
  }, [containerRef, scrollWidth, parentWidth]);
}
