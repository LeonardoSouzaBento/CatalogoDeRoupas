import { Button, Icon } from '@/components/ui';
import { CloudUpload } from 'lucide-react';

const Buttons = ({ mainImage = true }: { mainImage?: boolean }) => {
  function uploadImage() {
    if (mainImage) {
      console.log('mainImage');
    } else {
      console.log('subImage');
    }
  }
  return (
    <div className={`size-full flex flex-col gap-5 pb-5 bg-light-bg/86 z-2`}>
      <Button onClick={uploadImage}>
        Subir imagem menor
        <Icon LucideIcon={CloudUpload} />
      </Button>
      <Button variant={'outline'} onClick={uploadImage}>
        Subir imagem principal
        <Icon LucideIcon={CloudUpload} />
      </Button>
    </div>
  );
};

export { Buttons };
