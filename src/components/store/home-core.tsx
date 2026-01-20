'use client';
import { ZapFixedButton } from '@/components/ui/index';
import { Icon } from '@/components/ui/lucide-icon';
import { HomeContext } from '@/contexts';
import { HomeDataProvider } from '@/_providers/homeProvider';
import { PenOff } from 'lucide-react';
import { useContext, useState } from 'react';
import { Footer, LogoArea, Main, OptionsMenu, TopNavBar } from '@/components/store/home/';
import { Button } from '@/components/ui/button';

const HomeCore = () => {
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

export default HomeCore;
