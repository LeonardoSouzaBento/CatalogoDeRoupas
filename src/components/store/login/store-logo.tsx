'use client';
import React from 'react';

const StoreLogo = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="size-16 mb-4 flex-center rounded-2xl bg-neutral-900 shadow-xl shadow-neutral-900/10"
      >
        <div className="flex flex-col items-center">
           <span className="text-[10px] text-neutral-400 font-medium tracking-widest uppercase">The</span>
           <span className="text-sm text-white font-bold tracking-tighter -mt-1 uppercase">Store</span>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-neutral-900 tracking-tight mb-1">
        Bem-vindo de volta
      </h1>
      <p className="text-sm text-neutral-500 font-medium">
        Entre para continuar sua jornada fashion
      </p>
    </div>
  );
};

export { StoreLogo };

