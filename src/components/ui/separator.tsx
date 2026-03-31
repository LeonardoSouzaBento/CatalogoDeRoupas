"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/utils/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      data-separator
      decorative={decorative}
      orientation={orientation}
      className={cn(
        `bg-border/75 shrink-0 self-stretch data-[orientation=horizontal]:scale-y-99 data-[orientation=vertical]:scale-x-99
        data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full
        data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px`,
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
