'use client';
import { useState } from 'react';
import {
  BaseGenerator,
  FinalInfo,
  GenderButtons,
  Photos,
  ProductBasesList,
  Queue,
  Queuer,
  Result,
  SaveCard,
} from './add-product';
import { useResizeCount } from '@/hooks';

const AddProductCore = () => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const [resizeCount, setResizeCount] = useState<number>(0);
  useResizeCount(setResizeCount);

  return (
    <div className={`max-w-3xl lg:max-w-4xl mx-auto`}>
      <Queue />
      <ProductBasesList resizeCount={resizeCount} />
      <Photos />
      <GenderButtons />
      <BaseGenerator />
      <FinalInfo />
      <Result />
      <Queuer selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} />
      <SaveCard />
    </div>
  );
};

export default AddProductCore;
