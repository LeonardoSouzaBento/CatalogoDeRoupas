'use client';
import { ZapFixedButton } from '@/components/ui/index';
import { Icon } from '@/components/ui/lucide-icon';
import { HomeContext } from '@/contexts/index';
import { HomeDataProvider } from '@/_providers/homeProvider';
import { PenOff } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { Footer, HomeLogo, Main, OptionsMenu, TopNavBar } from '@/components/store/home/';
import { Button } from '@/components/ui/button';
import { useIsMobile, useResizingCounter } from '@/hooks';

const HomeCore = () => {
  const [seeOptionsSection, setSeeOptionsSection] = useState<boolean>(false);
  const { homeEditMode, setHomeEditMode } = useContext(HomeContext);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [resizeCount, setResizeCount] = useState<number>(0);
  
  useResizingCounter(setResizeCount);
  useIsMobile(resizeCount, setIsMobile);

  return (
    <HomeDataProvider>
      <HomeLogo />
      <TopNavBar setSeeOptionsSection={setSeeOptionsSection} isMobile={isMobile} />
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
