import React, { useRef, useState, useEffect } from "react";
import { ImageCanvas } from "./color-picker/ImageCanvas";
import { ColorFunnel } from "./color-picker/ColorFunnel";
import { ColorDisplay } from "./color-picker/ColorDisplay";
import { rgbToHex } from "./color-picker/utils";
import type { ColorPickerProps } from "./color-picker/types";


export default function ColorPicker({
  imageSrc,
  funnelSize = 80,
}: ColorPickerProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [pickedColor, setPickedColor] = useState<string>("#ffffff");
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Captura cor da ponta do funil
  useEffect(() => {
    if (!imageLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Calcula a posição da ponta do triângulo (funil)
    const tipX = position.x + funnelSize / 2;
    const tipY = position.y + funnelSize - 5;

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
  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - funnelSize / 2;
    const newY = e.clientY - rect.top - funnelSize;

    // Limita a posição do funil dentro da área da imagem
    const maxX = 300 - funnelSize;
    const maxY = 400 - funnelSize;

    setPosition({
      x: Math.max(0, Math.min(maxX, newX)),
      y: Math.max(0, Math.min(maxY, newY)),
    });
  };

  const handleCapture = () => {
    console.log("Cor capturada:", pickedColor);
    // Aqui você pode adicionar lógica para salvar a cor
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
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
  );
}
