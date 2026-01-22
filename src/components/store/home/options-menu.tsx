import { CloseButton } from '@/components/ui';
import { BooleanSetter } from '@/types/types';
import { useEffect, useState } from 'react';
import { AdministrationOptions, Choices, Links, Subtitle } from './options-menu/index';

const css = {
  container: `fixed top-0 right-0 w-full h-screen bg-black/16 z-6`,
  wrapper: `h-[calc(100vh-52px)] w-8/10 max-w-120 pb-6 min-h-screen z-6 
  bg-white rounded-none [box-shadow:_-8px_0_20px_rgba(0,0,0,0.05)] overflow-y-scroll trans absolute top-0 right-0
  `,
  wrapperTitle: `h-13 w-full flex items-center j-start sticky top-0 right-0 z-2 box-border pl-6 br-0 bg-stone-800 
  bg-gradient-to-l from-stone-800 to-stone-700/70`,
  title: `text-white font-semibold  mt-[1px]`,
};

const OptionsMenu = ({ setSeeOptionsSection }: { setSeeOptionsSection: BooleanSetter }) => {
  const [canClick, setCanClick] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setView(true);
      setCanClick(true);
    }, 200);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className={`${css.container}`}
      onClick={() => {
        if (canClick) {
          setView(false);
          setTimeout(() => {
            setSeeOptionsSection(false);
          }, 300);
        }
      }}>
      <div className={`${css.wrapper} ${view ? 'translate-x-0' : 'translate-x-120'}`}>
        <div className={`${css.wrapperTitle}`}>
          <h2 className={`${css.title}`}>Main Opções</h2>

          <CloseButton setState={setView} className="absolute top-2 right-2" />
        </div>

        <AdministrationOptions />

        <div className={`br-0 bg-[rgb(252,252,252)] z-2`}>
          <Subtitle subtitle="Navegue" />
          <Links />
        </div>

        <div className={`br-0 bg-white`}>
          <Subtitle subtitle="Escolha" />
          <Choices />
        </div>
      </div>
    </div>
  );
};

export {OptionsMenu};
