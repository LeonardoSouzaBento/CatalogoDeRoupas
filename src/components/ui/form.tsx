import { cn } from "@/utils/utils";

function Form({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form"
      className={cn(`flex flex-col gap-3`, className)}
      {...props}
    />
  );
}

export { Form };
