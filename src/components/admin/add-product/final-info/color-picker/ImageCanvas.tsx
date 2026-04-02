import { useEffect } from "react";
import { ImageCanvasProps } from "./types";
import Image from "next/image";

export function ImageCanvas({
  imageSrc,
  imgRef,
  canvasRef,
  onImageLoad,
  width = 300,
  height = 400,
}: ImageCanvasProps) {
  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;

    const loadImage = () => {
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        onImageLoad();
      }
    };

    if (img.complete) {
      loadImage();
    } else {
      img.onload = loadImage;
    }
  }, [imageSrc, imgRef, canvasRef, onImageLoad, width, height]);

  return (
    <>
      <div className="h-100 w-75 mx-auto relative overflow-hidden">
        <Image
          ref={imgRef}
          src={imageSrc}
          fill
          alt="Roupa"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </>
  );
}
