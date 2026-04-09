import { Button, Icon } from "@/components/ui";
import { Plus } from "lucide-react";
import Image from "next/image";

const imagesData = [
  { url: "/", alt: "imagem menor" },
  { url: "/", alt: "imagem principal" },
];

const ImageButtons = ({ mainImage = true }: { mainImage?: boolean }) => {
  function uploadImage() {
    if (mainImage) {
      console.log("mainImage");
    } else {
      console.log("subImage");
    }
  }

  return (
    <div className="w-full h-auto grid grid-cols-[1fr_1.5fr] gap-[clamp(10px,calc(9.2px+0.25vw),13px)]">
      {imagesData.map((image, index) => (
        <div key={index} className="w-auto h-60 relative">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="border border-input-border/75 rounded-md bg-input/50"
          />
          <Button
            size={"icon"}
            variant={"secondary"}
            className="absolute bottom-2 right-2 border-shadow shadow-xs/32 rounded-full"
            onClick={uploadImage}
          >
            <Icon Svg={Plus} fill="currentColor" size="lg" strokeWidth="thin" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export { ImageButtons };
