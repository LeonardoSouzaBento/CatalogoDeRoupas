'use client';
import React from 'react';

const LoadingPage = () => {
  return (
    <div
      className={`w-full h-screen flex justify-center items-center 
    fixed top-0 left-0 z-14 bg-white/66`}>
      <div className={`w-max p-12 h-max flex flex-col items-center gap-2 rounded-2xl`}>
        <div className="w-max h-max relative flex flex-center">
          <span
            className={`material-symbols-rounded animate-spin relative z-2 text-[#124da5] font-[350]!`}
            style={{ fontSize: '36px' }}>
            progress_activity
          </span>
          <span
            className={`material-symbols-outlined absolute top-0 right-0
            text-gray-300 font-[450]!`}
            style={{ fontSize: '36px' }}>
            circle
          </span>
        </div>
        <p className={`ml-2  font-semibold text-[#124da5]`}>Carregando...</p>
      </div>
    </div>
  );
};

export { LoadingPage };
