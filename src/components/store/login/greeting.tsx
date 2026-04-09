"use client";
import React from "react";

const Greeting = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="h-17 w-full mb-4.75 flex-center bg-primary-900">
        <p className="text-h3 font-logo text-white tracking-tight">
          Roupas Online
        </p>
      </div>
      <p className="text-muted-foreground/88 font-[450]">
        Faça login para continuar
      </p>
    </div>
  );
};

export { Greeting };
