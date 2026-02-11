import { Button, Icon } from '@/components/ui';
import { PenLine } from 'lucide-react';
import Image from 'next/image';

const imagesData = [
  { url: '/', alt: 'imagem menor' },
  { url: '/', alt: 'imagem principal' },
];

const ImageButtons = ({ mainImage = true }: { mainImage?: boolean }) => {
  function uploadImage() {
    if (mainImage) {
      console.log('mainImage');
    } else {
      console.log('subImage');
    }
  }

  return (
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-[1fr_1.45fr] gap-4">
      {imagesData.map((image, index) => (
        <div key={index} className="w-auto h-64 relative">
          <Image src={image.url} alt={image.alt} fill className="border rounded-md" />
          <Button
            size={'icon'}
            variant={'secondary'}
            className="absolute bottom-2 right-2 shadow-xs"
            onClick={uploadImage}>
            <Icon LucideIcon={PenLine} fill="currentColor" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export { ImageButtons };
