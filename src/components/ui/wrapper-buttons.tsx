import { cn } from "@/lib/utils";

function WrapperButtons({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="wrapper-buttons"
      className={cn(
        'w-full flex flex-wrap gap-3',
        className,
      )}
      {...props}
    />
  );
}

export { WrapperButtons };
