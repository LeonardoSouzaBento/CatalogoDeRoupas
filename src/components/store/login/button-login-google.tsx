'use client';
import { Button } from '@/components/ui';
import Image from 'next/image';

const ButtonLoginGoogle = () => {
  return (
    <Button>
      <div className="size-[18px] flex-center relative">
        <Image src={`/icons/google.png`} fill={true} alt="" />
      </div>
      Login Com Google
    </Button>
  );
};

export { ButtonLoginGoogle };

