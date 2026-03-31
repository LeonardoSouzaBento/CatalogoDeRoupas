"use client";

import { cn } from "@/utils/utils";
import Image from "next/image";
import React from "react";

// Interface for the Iphone15Pro component props
interface Iphone15ProProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  src?: string;
  alt?: string;
}

export const Iphone15Pro: React.FC<Iphone15ProProps> = ({
  src,
  alt = "iPhone screen content",
  className,
  ...props
}) => {
  return (
    <div className={cn("relative h-118", className)}>
      <svg
        className="block size-full object-cover"
        viewBox="0 0 433 882"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* Outer frame */}
        <path
          d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
          className="dark:fill-[#DADADA] fill-[#404040]"
        />

        {/* Side buttons */}
        <path
          d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
          className="dark:fill-[#DADADA] fill-[#404040]"
        />
        <path
          d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
          className="dark:fill-[#DADADA] fill-[#404040]"
        />
        <path
          d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
          className="dark:fill-[#DADADA] fill-[#404040]"
        />
        <path
          d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
          className="dark:fill-[#DADADA] fill-[#404040]"
        />

        {/* Inner body */}
        <path
          d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
          className="fill-[#262626] dark:fill-black"
        />

        {/* Screen */}
        <path
          d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
          className="fill-[#111] dark:fill-[#F5F5F5]"
        />

        {/* Screen Content */}
        {src && (
          <div className="relative size-full overflow-hidden rounded-[55.75px] bg-[#111] dark:bg-[#F5F5F5]">
            <Image src={src} alt={alt} fill className="object-cover" priority />
          </div>
        )}

        <defs>
          <clipPath id="roundedCorners">
            <rect
              x="21.25"
              y="19.25"
              width="389.5"
              height="843.5"
              rx="55.75"
              ry="55.75"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

interface TriplePhoneHeroProps {
  imageLeftSrc: string;
  imageLeftAlt?: string;
  imageCenterSrc: string;
  imageCenterAlt?: string;
  imageRightSrc: string;
  imageRightAlt?: string;
}

export const TriplePhoneHero: React.FC<TriplePhoneHeroProps> = ({
  imageLeftSrc,
  imageLeftAlt = "Left phone screen content",
  imageCenterSrc,
  imageCenterAlt = "Center phone screen content",
  imageRightSrc,
  imageRightAlt = "Right phone screen content",
}) => {
  return (
    <div className="relative flex min-h-[600px] w-full items-center justify-center">
      <div className="relative flex h-full w-full max-w-4xl items-center justify-center">
        {/* Left phone */}
        <div className="absolute z-10 w-[280px] md:w-[320px] lg:w-[360px] -translate-x-1/2 rotate-[-10deg] opacity-80">
          <Iphone15Pro src={imageLeftSrc} alt={imageLeftAlt} />
        </div>

        {/* Center phone */}
        <div className="relative z-20 w-[300px] md:w-[340px] lg:w-[380px]">
          <Iphone15Pro src={imageCenterSrc} alt={imageCenterAlt} />
        </div>

        {/* Right phone */}
        <div className="absolute z-10 w-[280px] md:w-[320px] lg:w-[360px] translate-x-1/2 rotate-10 opacity-80">
          <Iphone15Pro src={imageRightSrc} alt={imageRightAlt} />
        </div>
      </div>
    </div>
  );
};
