import * as React from "react";

import { cn } from "@/utils/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 px-[0.75em] w-full file:text-foreground placeholder:text-muted-foreground/60 selection:bg-primary-600 selection:text-primary-foreground bg-input border-input-border min-w-0 rounded-sm border shadow-xs transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-selected-500 focus-visible:ring-2 focus-visible:ring-selected-200",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
