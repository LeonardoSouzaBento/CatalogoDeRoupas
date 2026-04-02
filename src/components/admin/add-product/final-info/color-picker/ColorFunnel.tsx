import Image from "next/image";
import { ColorFunnelProps } from "./types";

export function ColorFunnel({
  position,
  color,
  onMouseDown,
}: ColorFunnelProps) {
  return (
    <div
      className={`h-max absolute cursor-grab active:cursor-grabbing 
        flex flex-col items-center pointer-events-auto`}
      onMouseDown={(e) => onMouseDown(e)}
      style={{ top: position.y, left: position.x }}
    >
      <div
        style={{ backgroundColor: color }}
        className="size-14 border-[1.5px] border-white/80 rounded-full
        outline-[1.5px] outline-black shadow-lg relative z-2"
      />

      <Image
        src={"/icons/seta.png"}
        alt="seta"
        width={19}
        height={19}
        className="bg-transparent -translate-y-0.5"
        draggable={false}
      />
    </div>
  );
}
