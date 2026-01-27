'use client';
import { HomeDataProvider } from '@/_providers/homeProvider';
import { Footer, HomeLogo, Main, OptionsMenu, TopNavBar } from '@/components/store/home/';
import { Button } from '@/components/ui/button';
import { ZapFixedButton } from '@/components/ui/index';
import { Icon } from '@/components/ui/lucide-icon';
import { HomeContext } from '@/contexts/index';
import { useIsMobile, useResizeCount } from '@/hooks';
import { PenOff } from 'lucide-react';
import { useContext, useState } from 'react';

const HomeCore = () => {
  const [seeOptionsSection, setSeeOptionsSection] = useState<boolean>(false);
  const { homeEditMode, setHomeEditMode } = useContext(HomeContext);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [resizeCount, setResizeCount] = useState<number>(0);

  useResizeCount(setResizeCount);
  useIsMobile(resizeCount, setIsMobile);

  return (
    <HomeDataProvider>
      <HomeLogo />
      <TopNavBar setSeeOptionsSection={setSeeOptionsSection} isMobile={isMobile} />
      {seeOptionsSection && <OptionsMenu setSeeOptionsSection={setSeeOptionsSection} />}
      <Main resizeCount={resizeCount} />
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
