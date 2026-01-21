import React from "react";

export interface ColorPickerProps {
  imageSrc: string;
  funnelSize?: number;
}

export interface ImageCanvasProps {
  imageSrc: string;
  imgRef: React.RefObject<HTMLImageElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  onImageLoad: () => void;
  width?: number;
  height?: number;
}

export interface ColorFunnelProps {
  position: { x: number; y: number };
  color: string;
  onMouseDown: () => void;
}

export interface ColorDisplayProps {
  color: string;
  onCapture?: () => void;
}
