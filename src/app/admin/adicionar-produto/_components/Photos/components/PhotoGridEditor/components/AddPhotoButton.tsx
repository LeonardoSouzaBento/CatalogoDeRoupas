import React from "react";
import { Plus } from "lucide-react";
import { iconMd } from "@/app/lucideIconStyles";
import { Photo, StateSetter } from "@/types/types";

const css = {
  wrapper: ``,
  input: `size-full p-0 abso bs-0 z-2 centralize opacity-0`,
  button: `light-button j-center relative`,
};

const AddPhotoButton = ({
  setPhotos,
}: {
  setPhotos: StateSetter<Photo[]>;
}) => {
  function handleAddPhoto(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowed.includes(file.type)) {
      alert("Formato de imagem não permitido. Escolha JPG (ou JPEG), PNG, ou WEBP.");
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
        };
        return updated;
      }

      // --- CASO 2: todos tem imagem → adiciona novo item
      const nextOrder = prev.length + 1;
      return [
        ...prev,
        {
          id: String(nextOrder),
          url: tempUrl,
          alt: `imagem ${nextOrder}`,
          order: nextOrder,
        },
      ];
    });
    event.target.value = "";
  }

  return (
    <button className={`${css.button}`}>
      Adicionar foto
      <div className={`wrapper-icon`}>
        <Plus {...iconMd} />
      </div>
      <input
        className={`${css.input}`}
        type="file"
        accept=".jpg, .jpeg, .png, .webp"
        onChange={(event) => {
          handleAddPhoto(event);
        }}
      />
    </button>
  );
};

export default AddPhotoButton;
