import { Button } from "@/components/ui/button";
import { ColorDisplayProps } from "./types";
import { Icon } from "@/components/ui";
import { ArrowRight, PlusCircle } from "lucide-react";

export function ColorDisplay({ color, onCapture }: ColorDisplayProps) {
  return (
    <div className="mt-4 flex gap-3">
      <Button
        variant={"outline"}
        size="sm"
        onClick={onCapture ? onCapture : () => {}}
      >
        <Icon Svg={PlusCircle} size="lg" strokeWidth="light" />
        Adicionar essa cor
        <Icon Svg={ArrowRight} />
      </Button>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground font-mono">{color}</span>
        <div
          className="size-8 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
