"use client";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

function ButtonWrapper({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("w-full flex justify-center", className)} {...props} />
  );
}

interface CTAButtonProps {
  showIcon?: boolean;
  hideInMobile?: boolean;
  cssWrapper?: string;
  cssButton?: string;
}

export function CTAButton({
  showIcon = true,
  hideInMobile = false,
  cssWrapper = "",
  cssButton = "",
}: CTAButtonProps) {
  return (
    <ButtonWrapper
      className={`${hideInMobile ? "hidden bp-930:flex mt-6" : "flex bp-930:hidden mt-6"} ${cssWrapper}`}
    >
      <Link
        href="/loja"
        className={`h-11 flex items-center justify-center gap-2 px-[1.5em]
        text-center rounded-xl capitalize font-[550] cursor-pointer
        bg-linear-to-r from-yellow-300 to-yellow-400
        hover:scale-104 transition-all duration-200
      [&_svg]:text-theme large-button leading-none ${cssButton}`}
      >
        {showIcon && <Icon Svg={ShoppingBag} className="mb-px" />}
        <span className="text-center w-fit">Ver um Catálogo Completo</span>
      </Link>
    </ButtonWrapper>
  );
}
