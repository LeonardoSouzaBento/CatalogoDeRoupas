import { useEffect, useState } from "react";

type Breakpoint = {
  name: string;
  width: number;
  query: string;
};

const defaultBreakpoints: Breakpoint[] = [
  { name: "sm", width: 640, query: "(min-width: 640px)" },
  { name: "md", width: 768, query: "(min-width: 768px)" },
  { name: "lg", width: 1024, query: "(min-width: 1024px)" },
  { name: "xl", width: 1280, query: "(min-width: 1280px)" },
  { name: "2xl", width: 1536, query: "(min-width: 1536px)" },
];

export function useMatchMedia(customBreakpoints: number[] = []) {
  const [current, setCurrent] = useState<number>(0);

  const bpKeys = customBreakpoints.join(",");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const customBps = customBreakpoints.map((bp, index) => ({
      name: `bp${index + 1}`,
      width: bp,
      query: `(min-width: ${bp}px)`,
    }));

    const allBreakpoints = [...defaultBreakpoints, ...customBps].sort((a, b) => a.width - b.width);

    const mqls = allBreakpoints.map(bp => ({
      name: bp.name,
      width: bp.width,
      mql: window.matchMedia(bp.query),
    }));

    const getActive = () => {
      // pega o maior breakpoint ativo
      const active = mqls
        .filter(bp => bp.mql.matches)
        .map(bp => bp.width);

      return active[active.length - 1] || 0;
    };

    const handler = () => {
      setCurrent(prev => {
        const next = getActive();
        return prev !== next ? next : prev; // evita re-render inútil
      });
    };

    mqls.forEach(({ mql }) => mql.addEventListener("change", handler));

    handler();

    return () => {
      mqls.forEach(({ mql }) => mql.removeEventListener("change", handler));
    };
  }, [bpKeys]); // usa join dos valores para evitar loop de dependência com array

  return current;
}
