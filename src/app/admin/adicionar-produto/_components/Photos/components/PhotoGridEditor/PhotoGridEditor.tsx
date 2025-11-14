"use client";
import type { Photo } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import AddPhotoButton from "./components/AddPhotoButton";
import RemoveConfirm from "./components/RemoveConfirm";
import RemovePhotoButton from "./components/RemovePhotoButton";
import ReorderButton from "./components/ReorderButton";

const css = {
  wrapper: `my-5 flex flex-wrap justify-start gap-5 crop relative`,
  wrapperEditMode: `ring ring-blue-200 p-5`,
  wrapperImg: `relative h-34 w-27 light-button overflow-hidden`,
  wrapperButtons: `flex flex-col gap-4 mb-5 min-[560px]:grid min-[560px]:grid-cols-2`,
  reorderAlert: `w-full min-h-10 p-3 px-6 bg-yellow-100/85 text-gray-800 flex items-center justify-start
  gap-2 `,
};

const initialPhotos = [
  { id: "1", url: "", alt: "imagem 1", order: 1 },
  { id: "2", url: "", alt: "imagem 2", order: 2 },
  { id: "3", url: "", alt: "imagem 3", order: 3 },
];

const PhotoGridEditor = () => {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [reorderMode, setReorderMode] = useState<boolean>(false);
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
      <div>
        <div
          className={`${css.wrapper} ${reorderMode && css.wrapperEditMode} ${
            seeRemoveConfirm && "overflow-visible!"
          }`}
        >
          {sortedPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`${css.wrapperImg} ${
                reorderMode &&
                photo.id === firstSelectedId &&
                "ring-style shadow-none!"
              }`}
              onClick={() => {
                handleImageClick(photo.id);
              }}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setPhotoTaken(photo);
                }}
              >
                <RemovePhotoButton />
              </div>
              <Image
                src={photo.url ? photo.url : "/home"}
                alt={photo.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {reorderMode && (
            <div className={`${css.reorderAlert}`}>
              <span
                className={`material-symbols-outlined line-span
                font-semibold text-[1.21em]!`}
              >
                touch_app
              </span>
              <p className={`font-medium`}>
                Clique em duas imagens para trocar as posições.
              </p>
            </div>
          )}
        </div>
        <div className={`${css.wrapperButtons}`}>
          <ReorderButton
            reorderMode={reorderMode}
            setReorderMode={setReorderMode}
          />
          <AddPhotoButton setPhotos={setPhotos} />
        </div>
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

export default PhotoGridEditor;
