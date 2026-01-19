'use client';
import ZapFixedButton from '@/app/_ui/ZapFixedButton';
import { HomeDataProvider } from '@/contexts/Providers/HomeProvider';
import { useState } from 'react';
import ExitHomeEditButton from '../../_ui/exit-home-edit-button';
import { Footer, LogoArea, Main, OptionsMenu, TopNavigationBar } from './_components';

const Core = () => {
  const [seeOptionsSection, setSeeOptionsSection] = useState<boolean>(false);

  return (
    <HomeDataProvider>
      <LogoArea />
      <TopNavigationBar setSeeOptionsSection={setSeeOptionsSection} />
      {seeOptionsSection && <OptionsMenu setSeeOptionsSection={setSeeOptionsSection} />}
      <Main />
      <Footer />
      <ExitHomeEditButton />
      <ZapFixedButton />
    </HomeDataProvider>
  );
};

export default Core;
