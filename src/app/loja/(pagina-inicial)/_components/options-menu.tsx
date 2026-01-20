import { useContext, useEffect, useState } from 'react';
import { ButtonClose } from '@/app/_ui';
import { BooleanSetter } from '@/types/types';
import { Subtitle, AdmOptions } from './options-menu/index';
import { mostSearched } from '@/data/UserData';
import Link from 'next/link';
import { UserContext } from '@/contexts';
import { Search } from 'lucide-react';

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

          <ButtonClose
            setState={setSeeOptionsSection}
            positionStyles="absolute top-2 right-2"
            styles="bg-stone-700/30 br-md hover:bg-stone-700/60 shadow-none! "
            delay={300}
            setStateAnimation={setView}
            iconStyles={{ color: 'white' }}
          />
        </div>

        <AdmOptions />

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

export default OptionsMenu;

const pageOptions = [
  {
    name: 'Meus favoritos',
    link: '/loja/favoritos',
    icon: 'favorite',
    iconStyles: '',
  },
  {
    name: 'Minha Conta',
    link: '/loja/minha-conta',
    icon: 'account_circle',
    iconStyles: 'ml-[0px] ',
  },
];

const Links = () => {
  const css = {
    wrapper: `w-full flex flex-col i-center j-start`,
    wrapperLink: `h-11 w-full flex i-center pl-6 gap-3 br-0 bg-transparent hover:bg-gray-100 hover:pl-4 transition-all duration-200`,
    link: `font-normal bg-transparent hover:bg-gray-100 px-0 hover:text-black transition-colors`,
  };

  return (
    <div className={`${css.wrapper}`}>
      {pageOptions.map((item) => (
        <div key={item.name} className={`${css.wrapperLink}`}>
          <span className={`material-symbols-rounded ${item.iconStyles}`}>{item.icon}</span>
          <Link href={item.link} className={`${css.link}`}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

const Choices = () => {
  const { selectedGender } = useContext(UserContext);
  const currentMostSearched =
    selectedGender === 'masculino'
      ? mostSearched.masculino
      : selectedGender === 'feminino'
        ? mostSearched.feminino
        : mostSearched.infantil;

  return (
    <div>
      {currentMostSearched.map((item) => (
        <div
          key={item}
          className={`w-full h-11 pl-[22px] flex i-center j-start gap-3 
          br-0 hover:bg-gray-100 hover:pl-4 fast-trans`}>
          <Search />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};
