'use client';
import { ZapFixedButton } from '@/components/common';
import { Icon } from '@/components/ui/lucide-icon';
import { HomeContext } from '@/contexts';
import { HomeDataProvider } from '@/contexts/Providers/HomeProvider';
import { PenOff } from 'lucide-react';
import { useContext, useState } from 'react';
import { Footer, LogoArea, Main, OptionsMenu, TopNavBar } from './_components';
import { Button } from '@/components/ui/button';

const Core = () => {
  const [seeOptionsSection, setSeeOptionsSection] = useState<boolean>(false);
  const { homeEditMode, setHomeEditMode } = useContext(HomeContext);

  return (
    <HomeDataProvider>
      <LogoArea />
      <TopNavBar setSeeOptionsSection={setSeeOptionsSection} />
      {seeOptionsSection && <OptionsMenu setSeeOptionsSection={setSeeOptionsSection} />}
      <Main />
      <Footer />
      {homeEditMode && (
        <Button
          onClick={() => {
            setHomeEditMode(false);
          }}>
          Fechar edição
          <Icon LucideIcon={PenOff} size="md" />
        </Button>
      )}
      <ZapFixedButton />
    </HomeDataProvider>
  );
};

export default Core;
