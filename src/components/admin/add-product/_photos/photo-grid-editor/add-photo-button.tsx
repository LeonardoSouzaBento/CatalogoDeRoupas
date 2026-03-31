import { Button, ButtonProps, Input } from "@/components/ui";
import type { Photo, StateSetter } from "@/types/types";
import React from "react";

interface AddPhotoButtonProps extends ButtonProps {
  photos: Photo[];
  setPhotos: StateSetter<Photo[]>;
  photoLimit: number;
  children?: React.ReactNode;
}

export const AddPhotoButton = ({
  photos,
  setPhotos,
  photoLimit,
  children,
  ...props
}: AddPhotoButtonProps) => {
  function handleAddPhoto(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowed.includes(file.type)) {
      alert(
        "Formato de imagem não permitido. Escolha JPG (ou JPEG), PNG, ou WEBP.",
      );
      return;
    }

    const tempUrl = URL.createObjectURL(file);

    setPhotos((prev) => {
      // 1. Tenta encontrar o primeiro item sem URL ou com URL vazia
      const indexWithoutImage = prev.findIndex((p) => !p.url);

      // --- CASO 1: existe item sem imagem → apenas atualiza ele
      if (indexWithoutImage !== -1) {
        const updated = [...prev];
        updated[indexWithoutImage] = {
          ...updated[indexWithoutImage],
          url: tempUrl,
          alt: `imagem ${updated[indexWithoutImage].order}`,
          fileName: file.name,
        };
        return updated;
      }

      // --- CASO 2: todos tem imagem → verifica o limite
      if (prev.length >= photoLimit) {
        alert(`Você só pode adicionar até ${photoLimit} fotos.`);
        return prev;
      }

      // --- CASO 3: todos tem imagem → adiciona novo item
      const nextOrder = prev.length + 1;
      return [
        ...prev,
        {
          id: String(nextOrder),
          url: tempUrl,
          alt: `imagem ${nextOrder}`,
          order: nextOrder,
          fileName: file.name,
        },
      ];
    });
    event.target.value = "";
  }

  return (
    <Button
      className="relative"
      data-round
      size={"icon-lg"}
      disabled={photos.length >= photoLimit}
      {...props}
    >
      {children}
      <Input
        type="file"
        accept=".jpg, .jpeg, .png, .webp"
        className="bg-transparent absolute inset-0 opacity-0 z-10"
        onChange={(event) => {
          handleAddPhoto(event);
        }}
      />
    </Button>
  );
};
