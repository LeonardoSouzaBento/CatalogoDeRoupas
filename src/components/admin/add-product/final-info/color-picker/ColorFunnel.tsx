import { ColorFunnelProps } from "./types";

export function ColorFunnel({
  position,
  color,
  onMouseDown,
}: ColorFunnelProps) {
  return (
    <div
      onMouseDown={onMouseDown}
      className={`h-max w-12 absolute cursor-grab active:cursor-grabbing 
        flex flex-col items-center pointer-events-auto`}
      style={{ top: position.y, left: position.x }}
    >
      <div
        style={{ backgroundColor: color }}
        className={`size-14 rounded-full border-2 border-white 
            shadow-lg border relative z-2`}
      />

      <div
        className={`size-8`}
      />
    </div>
  );
}
