'use client';
import React, { useState } from 'react';
import { GenderButtons } from './add-product/gender-buttons';
import { Photos } from './add-product/photos';
import { ProductBasesList } from './add-product/product-base-list/product-base-list';
import { BaseGenerator } from './add-product/base-generator';
import { FinalInformations } from './add-product/final-info';
import { Queuer } from './add-product/queuer_';
import { Result } from './add-product/result_';
import { SaveCard } from './add-product/save-card';
import { Queue } from './add-product/queue';

const AddProductCore = () => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);

  return (
    <div className={`max-w-3xl lg:max-w-4xl mx-auto`}>
      <Queue />
      <ProductBasesList />
      <Photos />
      <GenderButtons />
      <BaseGenerator />
      <FinalInformations />
      <Result />
      <Queuer selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} />
      <SaveCard />
    </div>
  );
};

export default AddProductCore;
