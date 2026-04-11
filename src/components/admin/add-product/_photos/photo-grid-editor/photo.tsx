import type { Photo, StateSetter } from "@/types/types";
import Image from "next/image";
import { AddPhotoButton } from "./add-photo-button";
import { RemovePhotoButton } from "./remove-photo-button";
import { Plus } from "lucide-react";
import { Icon } from "@/components/ui";

interface PhotoComponentProps {
  photo: Photo;
  reorderMode: boolean;
  firstSelectedId: string | null;
  handleImageClick: (photoId: string) => void;
  setPhotoTaken: (photo: Photo) => void;
  photos: Photo[];
  setPhotos: StateSetter<Photo[]>;
  photoLimit: number;
}

export const PhotoComponent = ({
  photo,
  reorderMode,
  firstSelectedId,
  handleImageClick,
  setPhotoTaken,
  photos,
  setPhotos,
  photoLimit,
}: PhotoComponentProps) => {
  return (
    <div>
      <div
        className={`relative w-36 aspect-3/4 overflow-hidden bg-medium-bg 
          ${reorderMode && photo.id === firstSelectedId && "ring-[1.5px] ring-selected-400 rounded-md"}`}
        onClick={() => {
          handleImageClick(photo.id);
        }}
      >
        {photo.url && !reorderMode && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setPhotoTaken(photo);
            }}
          >
            <RemovePhotoButton />
          </div>
        )}
        {!photo.url && !reorderMode && (
          <AddPhotoButton
            photos={photos}
            setPhotos={setPhotos}
            photoLimit={photoLimit}
            variant={"secondary"}
            size={"icon-sm"}
            className="z-10 absolute bottom-2 right-2 shadow-xs/32"
          >
            <Icon Svg={Plus} size="md" strokeWidth="light" />
          </AddPhotoButton>
        )}
        <Image
          src={photo.url ? photo.url : "/home"}
          alt={photo.alt}
          fill
          className="object-cover bg-dark-bg rounded-md"
        />
      </div>
    </div>
  );
};
