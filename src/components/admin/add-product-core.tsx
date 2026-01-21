'use client';
import React, { useState } from 'react';
import GenderButtons from './GenderButtons';
import Photos from './_photos/Photos';
import ProductBasesList from './product-base-list/ProductBasesList';
import BaseGenerator from './base-generator/BaseGenerator';
import FinalInformations from './final-info/FinalInformations';
import Queuer from './_queuer/Queuer';
import Result from './result/Result';
import SaveCard from './SaveCard';
import Queue from './_queue/Queue';

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
