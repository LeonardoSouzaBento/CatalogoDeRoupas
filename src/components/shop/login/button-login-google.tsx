'use client';
import Image from 'next/image';
import React from 'react';
import { buttonStyles } from '../../../app/loja/login/page';

const ButtonLoginGoogle = () => {
  return (
    <button className={`${buttonStyles} mb-5 bg-white bs hover:bg-gray-100`}>
      <div className="size-[18px] flex-center relative">
        <Image src={`/icons/google.png`} fill={true} alt="" />
      </div>
      Login Com Google
    </button>
  );
};

export default ButtonLoginGoogle;
