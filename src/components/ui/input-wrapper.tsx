import React from "react";
import { cn } from "@/utils/utils";

export function InputWrapper({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-wrapper"
      className={cn("w-full flex flex-col gap-2", className)}
      {...props}
    />
  );
}
