import { useEffect, useRef, RefObject, useState, useCallback } from 'react';

type ScrollStart = 'start' | 'center';

interface UseMouseScrollXParams {
  containerRef: RefObject<HTMLElement | null>;
  parentRef: RefObject<HTMLElement | null>;
  resizeCount?: number | string;
  scrollStart?: ScrollStart;
}

export function useMouseScrollX({
  containerRef,
  parentRef,
  resizeCount,
  scrollStart = 'start',
}: UseMouseScrollXParams) {
  const [parentWidth, setParentWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);

  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const startScrollLeft = useRef<number>(0);
  const inertiaFrame = useRef<number | null>(null);

  // velocidade
  const lastX = useRef<number>(0);
  const lastTime = useRef<number>(0);
  const velocity = useRef<number>(0);

  // 🔹 Configurações
  const VELOCITY_THRESHOLD = 0.5; // px/ms
  const INERTIA_MULTIPLIER = 300;
  const MAX_EXTRA_SCROLL = 500;

  const calculate = useCallback(() => {
    if (!parentRef.current || !containerRef.current) return;

    const parent = parentRef.current.offsetWidth;
    const scroll = containerRef.current.scrollWidth;

    setParentWidth(parent);
    setScrollWidth(scroll);

    if (scroll > 0) {
      setThumbWidth((parent / scroll) * 100);
    }
  }, [parentRef, containerRef]);

  // Handle calculation on mount and when resizeCount changes
  useEffect(() => {
    calculate();
  }, [calculate, resizeCount]);

  const stopInertia = () => {
    if (inertiaFrame.current) {
      cancelAnimationFrame(inertiaFrame.current);
      inertiaFrame.current = null;
    }
  };

  // 🔹 Define posição inicial
  useEffect(() => {
    const el = containerRef.current;
    if (!el || scrollWidth === 0) return;

    if (scrollStart === 'center') {
      const centerOffset = Math.max(0, (scrollWidth - parentWidth) / 2);
      el.scrollLeft = centerOffset;
    } else {
      el.scrollLeft = 0;
    }
  }, [scrollStart, scrollWidth, parentWidth, containerRef]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || scrollWidth === 0) return;

    const maxScroll = Math.max(0, scrollWidth - parentWidth);
    if (maxScroll <= 0) return;

    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(v, max));

    const onMouseDown = (e: MouseEvent) => {
      stopInertia();
      isDragging.current = true;
      startX.current = e.pageX;
      startScrollLeft.current = el.scrollLeft;
      lastX.current = e.pageX;
      lastTime.current = performance.now();
      velocity.current = 0;
      el.style.userSelect = 'none';
      el.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const deltaX = e.pageX - startX.current;
      el.scrollLeft = clamp(startScrollLeft.current - deltaX, 0, maxScroll);

      // 🔹 calcular velocidade
      const now = performance.now();
      const dx = e.pageX - lastX.current;
      const dt = now - lastTime.current;

      if (dt > 0) {
        velocity.current = dx / dt; // px/ms
      }

      lastX.current = e.pageX;
      lastTime.current = now;
    };

    const applyInertia = () => {
      const v = velocity.current;
      if (Math.abs(v) < VELOCITY_THRESHOLD) return;

      let extraScroll = -v * INERTIA_MULTIPLIER;
      extraScroll = clamp(extraScroll, -MAX_EXTRA_SCROLL, MAX_EXTRA_SCROLL);

      const start = el.scrollLeft;
      const target = clamp(start + extraScroll, 0, maxScroll);
      const duration = 400;
      const startTime = performance.now();

      const animate = (time: number) => {
        const progress = clamp((time - startTime) / duration, 0, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        el.scrollLeft = start + (target - start) * easeOut;

        if (progress < 1) {
          inertiaFrame.current = requestAnimationFrame(animate);
        }
      };

      inertiaFrame.current = requestAnimationFrame(animate);
    };

    const stopDragging = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      applyInertia();
      if (el) {
        el.style.userSelect = '';
        el.style.cursor = '';
      }
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopDragging);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      stopInertia();
    };
  }, [containerRef, scrollWidth, parentWidth]);

  return {
    parentWidth,
    scrollWidth,
    thumbWidth,
    stop: stopInertia
  };
}

