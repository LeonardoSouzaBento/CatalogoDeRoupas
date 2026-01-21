import { cn } from "@/lib/utils";

function ButtonsWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="buttons-wrapper"
      className={cn(
        'w-full flex flex-wrap gap-3',
        className,
      )}
      {...props}
    />
  );
}

export { ButtonsWrapper };
