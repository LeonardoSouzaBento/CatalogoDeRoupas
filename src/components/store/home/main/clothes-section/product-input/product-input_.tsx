import { Card } from '@/components/ui';
import { ImageButtons } from './image-buttons';
import { Images } from './images_';
import { InfoForm } from './info-form';

const ProductInput = ({ id }: { id: number | string }) => {
  return (
    <Card className="w-full p-4">
      <ImageButtons />
      <InfoForm id={id} />
    </Card>
  );
};

export { ProductInput };
