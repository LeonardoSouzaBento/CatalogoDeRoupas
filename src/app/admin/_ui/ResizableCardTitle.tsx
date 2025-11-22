"use client";
import { iconLg } from "@/app/lucideIconStyles";
import { setReducedHeight } from "@/functions/setReducedHeight";
import { useResizeWatcher } from "@/hooks/useResizeWatcher";
import { BooleanSetter, StateSetter } from "@/types/types";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  expand: boolean;
  setExpand: BooleanSetter;
  setDivHeight: StateSetter<string | null>;
  valueToFixHeight?: number;
  buttonStyles?: string;
}

const css = {
  wrapperTitle: `max-h-max flex justify-between gap-4 sm:justify-start`,
  button: `h-8 min-w-8 -mr-2 px-0 pt-px centralize bs
  br-50 box-border trans white-button sm:order-[-1] sm:mt-1 sm:mr-0`,
};

export function ResizableDivTitle({
  children,
  expand,
  setExpand,
  setDivHeight,
  valueToFixHeight = 10,
  buttonStyles,
}: Props) {
  const [resizeConut, setResizeCount] = useState<number>(0);
  useResizeWatcher(setResizeCount);

  const wrapperTitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setReducedHeight(wrapperTitleRef, setDivHeight, valueToFixHeight);
  }, []);

  useEffect(() => {
    setReducedHeight(wrapperTitleRef, setDivHeight, valueToFixHeight);
  }, [resizeConut]);

  return (
    <div
      ref={wrapperTitleRef}
      className={`${css.wrapperTitle}`}
      onClick={() => {
        setExpand((prev) => !prev);
      }}
    >
      {children}

      <button
        onClick={(e) => {
          e.stopPropagation();
          setExpand((prev) => !prev);
        }}
        className={`${css.button} ${buttonStyles && buttonStyles} ${
          expand ? "rotate-180 pt-1 pl-0 pr-px" : "rotate-0 pl-px"
        }`}
      >
        <ChevronDown {...iconLg} />
      </button>
    </div>
  );
}
