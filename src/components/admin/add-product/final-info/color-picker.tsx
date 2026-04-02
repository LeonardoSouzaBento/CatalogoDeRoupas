import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useRef, useState, useEffect } from "react";
import { ImageCanvas } from "./color-picker/ImageCanvas";
import { ColorFunnel } from "./color-picker/ColorFunnel";
import { ColorDisplay } from "./color-picker/ColorDisplay";
import { rgbToHex } from "./color-picker/utils";
import type { ColorPickerProps } from "./color-picker/types";

export function ColorPicker({
  imageSrc,
  funnelSize = 80,
  trigger,
}: ColorPickerProps & { trigger?: React.ReactNode }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [pickedColor, setPickedColor] = useState<string>("#ffffff");
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 }); // Para evitar saltos no início do arraste
  const [imageLoaded, setImageLoaded] = useState(false);

  const FUNNEL_WIDTH = 56;
  const FUNNEL_HEIGHT = 84;

  // Captura cor da ponta do funil
  useEffect(() => {
    if (!imageLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Calcula a posição da ponta do triângulo (funil)
    // A ponta está no centro horizontal (WIDTH/2) e na borda inferior (HEIGHT)
    const tipX = position.x + FUNNEL_WIDTH / 2;
    const tipY = position.y + FUNNEL_HEIGHT;

    // Garante que as coordenadas estão dentro dos limites do canvas
    const clampedX = Math.max(0, Math.min(canvas.width - 1, Math.round(tipX)));
    const clampedY = Math.max(0, Math.min(canvas.height - 1, Math.round(tipY)));

    try {
      const data = ctx.getImageData(clampedX, clampedY, 1, 1).data;
      const hex = rgbToHex(data[0], data[1], data[2]);
      setPickedColor(hex);
    } catch (error) {
      console.error("Erro ao capturar cor:", error);
    }
  }, [position, funnelSize, imageLoaded]);

  // Handlers de mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setDragging(true);

    const rect = containerRef.current.getBoundingClientRect();
    // Armazena onde o usuário clicou em relação ao canto superior esquerdo do funil
    setDragOffset({
      x: e.clientX - rect.left - position.x,
      y: e.clientY - rect.top - position.y,
    });
  };

  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.x;
    const newY = e.clientY - rect.top - dragOffset.y;

    // Limites para que a PONTA alcance as bordas da imagem (300x400)
    // A ponta está em (x + FUNNEL_WIDTH/2, y + FUNNEL_HEIGHT)
    const minX = -FUNNEL_WIDTH / 2;
    const maxX = 300 - FUNNEL_WIDTH / 2;
    const minY = -FUNNEL_HEIGHT;
    const maxY = 400 - FUNNEL_HEIGHT;

    setPosition({
      x: Math.max(minX, Math.min(maxX, newX)),
      y: Math.max(minY, Math.min(maxY, newY)),
    });
  };

  const handleCapture = () => {
    console.log("Cor capturada:", pickedColor);
    // Aqui você pode adicionar lógica para salvar a cor
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-fit">
        <DialogHeader>
          <DialogTitle>Seletor de Cores</DialogTitle>
        </DialogHeader>
        <div className="w-full max-w-max flex flex-col p-4 rounded-md select-none border">
          <div
            ref={containerRef}
            className="relative inline-block"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <ImageCanvas
              imageSrc={imageSrc}
              imgRef={imgRef}
              canvasRef={canvasRef}
              onImageLoad={() => setImageLoaded(true)}
            />

            <ColorFunnel
              position={position}
              color={pickedColor}
              onMouseDown={handleMouseDown}
            />
          </div>

          <ColorDisplay color={pickedColor} onCapture={handleCapture} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
