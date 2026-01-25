import { Button, CloseButton, Icon, Separator } from '@/components/ui';
import { BooleanSetter } from '@/types/types';
import { useContext, useEffect, useState } from 'react';
import { AdministrationOptions, Links, TitleButtonGroup } from './options-menu/index';
import { UserContext } from '@/contexts';
import { mostSearched } from '@/data/UserData';
import { Search, X } from 'lucide-react';

const css = {
  container: `fixed top-0 right-0 w-full h-screen bg-black/16 z-6`,
  wrapper: `h-[100dvh] w-8/10 max-w-120 pb-6 min-h-screen z-6 
  bg-white rounded-none shadow-md overflow-y-scroll trans absolute top-0 right-0`,
  header: `h-12 w-full flex items-center j-start sticky top-0 right-0 z-2 box-border pl-6 round-none bg-stone-800 
  bg-gradient-to-l from-primary-900 to-primary-800`,
  title: `text-white font-semibold mt-[1px]`,
  buttonsWrapper: `flex flex-col items-start gap-2 
  [&_[data-separator]]:w-[calc(100%-2rem)] [&_[data-separator]]:mx-auto`,
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
          <Button
            size="icon"
            variant="default"
            className="absolute top-1.5 right-3 rounded-full bg-primary-50/20 hover:bg-primary-50/40"
            onClick={() => setView(false)}>
            <Icon LucideIcon={X} size="lg" strokeValue={'medium'} />
          </Button>
        </div>

        <TitleButtonGroup title="Administrar" />
        <div className={css.buttonsWrapper}>
          <AdministrationOptions />
          <Separator />
        </div>

        <TitleButtonGroup title="Navegue" />
        <div className={css.buttonsWrapper}>
          <Links />
          <Separator />
        </div>

        <TitleButtonGroup title="Escolha" />
        <div className={css.buttonsWrapper}>
          <Choices />
        </div>
      </div>
    </div>
  );
};

export { OptionsMenu };

const Choices = () => {
  const { selectedGender } = useContext(UserContext);
  const currentMostSearched =
    selectedGender === 'masculino'
      ? mostSearched.masculino
      : selectedGender === 'feminino'
        ? mostSearched.feminino
        : mostSearched.infantil;

  return (
    <>
      {currentMostSearched.map((item) => (
        <Button variant="transparent" key={item}>
          <Icon LucideIcon={Search} />
          {item}
        </Button>
      ))}
    </>
  );
};
