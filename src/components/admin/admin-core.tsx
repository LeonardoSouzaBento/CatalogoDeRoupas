'use client';
import React, { useContext, useState } from 'react';
import { HomeContext } from '@/contexts/index';
import { BookHeart, Eye, Pen, Plus } from 'lucide-react';
import Link from 'next/link';
import { useResizingCounter } from '@/hooks';

const optionButtons = [
  {
    name: 'Ver Minha loja',
    url: '/loja',
    icon: Eye,
  },
  {
    name: 'Adicionar Produto',
    url: '/admin/adicionar-produto',
    icon: Plus,
  },
  {
    name: 'Atualizar Produtos',
    url: '/admin/atualizar-produto',
    icon: Pen,
  },
  {
    name: 'Ver Favoritos Do Usúario',
    url: '/admin/favoritos-do-usuario',
    icon: BookHeart,
  },
];

const css = {
  wrapper: 'min-h-[100vh] min-w-[100vw] px-3 pb-12 flex-center bg-transparent',
  container:
    'h-auto w-full max-w-[592px] px-8 py-6 mb-12 min-[688px]:max-w-[672px] lg:mb-0 rounded-xl bg-light-bg shadow-lg',
  wrapperButtons: 'flex flex-col min-[680px]:flex-row min-[680px]:flex-wrap gap-4 mb-2',
  h1: 'text-gray-900 font-semibold capitalize tracking-normal mb-3 text-left ',
  h2: 'w-full mb-6 font-light text-left text-neutral-600  cursor-default',
  button:
    'h-10 min-[680px]:min-w-[calc(50%-8px)] min-[680px]:max-w-[calc(50%-8px)] flex flex-auto button',
};

const AdminCore = () => {
  const { setHomeEditMode } = useContext(HomeContext);
  const [resizeCount, setResizeCount] = useState<number>(0);
  useResizingCounter(setResizeCount);

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`}>
        <h1 className={`${css.h1}`}>Seja bem vindo Fulano</h1>
        <h2 className={`${css.h2}`}>
          Este é seu menu de Administrador. <br /> O que gostaria fazer?
        </h2>

        <div className={`${css.wrapperButtons}`}>
          {optionButtons.map((button, index) => (
            <Link
              key={button.name}
              className={`${css.button} ${index === 0 && 'font-semibold'}`}
              href={button.url}
              onClick={() => {
                if (button.url === '/loja') {
                  setHomeEditMode(true);
                }
              }}>
              <button.icon {...(index === 0 ? { strokeWidth: 2.4 } : {})} />
              {button.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCore;
