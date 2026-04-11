"use client";
import { Icon, MuiIcon } from "@/components/ui";
import type { Photo } from "@/types/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AddPhotoButton,
  RemoveConfirm,
  ReorderButton,
} from "./photo-grid-editor/index";
import { PhotoComponent } from "./photo-grid-editor/photo";

const initialPhotos = [
  { id: "1", url: "", alt: "imagem 1", order: 1 },
  { id: "2", url: "", alt: "imagem 2", order: 2 },
  { id: "3", url: "", alt: "imagem 3", order: 3 },
];

export const PhotoGridEditor = () => {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [reorderMode, setReorderMode] = useState<boolean>(false);
  const photoLimit = 8;
  const samePhoto = photos.some((photo, index) => {
    if (!photo.fileName) return false;
    return photos.some(
      (p, i) => p.fileName === photo.fileName && i !== index && p.url,
    );
  });
  const [firstSelectedId, setFirstSelectedId] = useState<string | null>(null);
  const [photoTaken, setPhotoTaken] = useState<Photo | null>(null);
  const [seeRemoveConfirm, setSeeRemoveConfirm] = useState<boolean>(false);

  //   const [removePhoto, setRemovePhoto] = useState<boolean>(true);

  const handleImageClick = (photoId: string) => {
    if (!reorderMode) return;
    //pega a primeira imagem
    if (firstSelectedId === null) {
      setFirstSelectedId(photoId);
    }
    // cancelar seleção por clique na mesma imagem
    else if (firstSelectedId === photoId) {
      setFirstSelectedId(null);
    } else {
      // já temos um primeiro, trocar com este
      setPhotos((prev) => {
        // encontra os dois objetos
        const first = prev.find((p) => p.id === firstSelectedId);
        const second = prev.find((p) => p.id === photoId);
        if (!first || !second) return prev;

        // troca ordem
        const newArray = prev.map((photo) => {
          if (photo.id === first.id) return { ...photo, order: second.order };
          if (photo.id === second.id) return { ...photo, order: first.order };
          return photo;
        });
        return newArray;
      });
      // limpa seleção
      setFirstSelectedId(null);
    }
  };

  const sortedPhotos = photos.slice().sort((a, b) => a.order - b.order);

  useEffect(() => {
    if (photoTaken?.url) {
      setSeeRemoveConfirm(true);
    } else {
      setSeeRemoveConfirm(false);
    }
  }, [photoTaken?.url, setSeeRemoveConfirm]);

  return (
    <>
      <div
        className={`${reorderMode && "ring ring-blue-300 p-1 pb-1.25 rounded-md gap-2 mb-5"}`}
      >
        <div
          className={`mb-2 flex flex-wrap justify-start items-end crop relative 
             ${seeRemoveConfirm && "overflow-visible!"} ${!reorderMode ? "gap-4" : "gap-3"}`}
        >
          {sortedPhotos.map((photo) => (
            <PhotoComponent
              key={photo.id}
              photo={photo}
              reorderMode={reorderMode}
              firstSelectedId={firstSelectedId}
              handleImageClick={handleImageClick}
              setPhotoTaken={setPhotoTaken}
              photos={photos}
              setPhotos={setPhotos}
              photoLimit={photoLimit}
            />
          ))}
          {!reorderMode && (
            <AddPhotoButton
              photos={photos}
              setPhotos={setPhotos}
              photoLimit={photoLimit}
            >
              <Icon Svg={Plus} size={"lg"} />
            </AddPhotoButton>
          )}
        </div>

        {!reorderMode && (
          <div className="mb-3">
            <p className="text-xs text-gray-500">
              Você pode adicionar até {photoLimit} fotos. Formatos aceitos: JPG,
              JPEG, PNG, WEBP
            </p>
            {samePhoto && (
              <p className="text-xs text-red-500">
                Você adicinou uma foto duas vezes ou mais. Remova a foto
                duplicada para continuar.
              </p>
            )}
          </div>
        )}

        {reorderMode && (
          <div
            className="w-full min-h-10 p-3 px-6 bg-yellow-100/85 crop
              text-gray-800 flex items-center justify-start gap-1 small-text rounded-sm"
          >
            <MuiIcon
              icon="touch_app"
              size="h4"
              weight={400}
              fill
              className="-mr-0.75 text-yellow-600"
            />
            <p>Clique em duas imagens para trocar as posições.</p>
          </div>
        )}

        <ReorderButton
          photos={photos}
          reorderMode={reorderMode}
          setReorderMode={setReorderMode}
          className={!reorderMode ? "mb-4.25" : "mt-2"}
        />
      </div>
      {seeRemoveConfirm && (
        <RemoveConfirm
          setSeeRemoveConfirm={setSeeRemoveConfirm}
          photo={photoTaken}
          setPhotos={setPhotos}
          setPhotoTaken={setPhotoTaken}
        />
      )}
    </>
  );
};
