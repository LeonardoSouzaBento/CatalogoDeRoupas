import { CloseButton } from '@/components/ui';
import { BooleanSetter } from '@/types/types';
import { useEffect, useState } from 'react';
import { AdministrationOptions, Choices, Links, TitleButtonGroup } from './options-menu/index';

const css = {
  container: `fixed top-0 right-0 w-full h-screen bg-black/16 z-6`,
  wrapper: `h-[calc(100vh-52px)] w-8/10 max-w-120 pb-6 min-h-screen z-6 
  bg-white rounded-none shadow-md overflow-y-scroll trans absolute top-0 right-0
  [&_[data-slot="separator"]:mx-6]`,
  header: `h-12 w-full flex items-center j-start sticky top-0 right-0 z-2 box-border pl-6 br-0 bg-stone-800 
  bg-gradient-to-l from-primary-900 to-primary-800`,
  title: `text-white font-semibold mt-[1px]`,
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
        <div className={`${css.header}`}>
          <p className={`text-primary-50 font-semibold large-text`}>Main Opções</p>
          <CloseButton setState={setView} className="absolute top-2 right-2" />
        </div>

        <AdministrationOptions />
        <div className={`br-0 bg-[rgb(252,252,252)] z-2`}>
          <TitleButtonGroup title="Navegue" />
          <Links />
        </div>
        <div className={`br-0 bg-white`}>
          <TitleButtonGroup title="Escolha" />
          <Choices />
        </div>
      </div>
    </div>
  );
};

export { OptionsMenu };
