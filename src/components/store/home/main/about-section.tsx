import { SectionHeader } from '@/components/store/home/ui/index';
import { PublicDataContext } from '@/contexts/publicDataContext';
import { useContext, useState } from 'react';
import AboutInput from './about-section/about-input';

const css = {
  wrapperAbout: 'm-auto relative',
  homeEditMode: 'shadow-lg/12 py-47 sm:py-40 md:py-34 br-lg ',
  wrapperP: 'size-full relative z-0',
  p: 'pb-3 relative last:pb-0',
};

export const AboutSection = () => {
  const [seeInput, setSeeInput] = useState<boolean>(false);
  const { shopInfo, setShopInfo } = useContext(PublicDataContext);

  return (
    <div>
      <SectionHeader
        section="about"
        title="Sobre Nós"
        subtitle="Conheça mais a nossa loja"
        sectionEditMode={seeInput}
        setSectionEditMode={setSeeInput}
      />
      <div className={`${css.wrapperAbout} ${seeInput && css.homeEditMode}`}>
        {shopInfo.aboutText.map((paragraph: string, index: number) => (
          <div className={`${css.wrapperP}`} key={index}>
            <p key={index} className={`${css.p}`}>
              {paragraph}
            </p>
          </div>
        ))}
        {seeInput && (
          <AboutInput shopInfo={shopInfo} setShopInfo={setShopInfo} setSeeInput={setSeeInput} />
        )}
      </div>
    </div>
  );
};
