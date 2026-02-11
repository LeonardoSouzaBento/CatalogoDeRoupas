"use client";
import { HomeDataProvider } from "@/_providers/homeProvider";
import { Footer, Main, OptionsMenu, TopNavBar } from "@/components/store/home/";
import { Button } from "@/components/ui/button";
import { ZapFixedButton } from "@/components/ui/index";
import { Icon } from "@/components/ui/lucide-icon";
import { HomeContext } from "@/contexts/index";
import { useIsMobile, useResizeCount } from "@/hooks";
import { PenOff } from "lucide-react";
import { useContext, useState } from "react";
import { Header } from "./home/main/header";

const HomeCore = () => {
  const [seeOptionsSection, setSeeOptionsSection] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [resizeCount, setResizeCount] = useState<number>(0);

  useResizeCount(setResizeCount);
  useIsMobile(resizeCount, setIsMobile);

  return (
    <HomeDataProvider>
      <Header
        resizeCount={resizeCount}
        setSeeOptionsSection={setSeeOptionsSection}
      />
      {seeOptionsSection && (
        <OptionsMenu setSeeOptionsSection={setSeeOptionsSection} />
      )}
      <Main resizeCount={resizeCount} />
      <Footer />
      <TopNavBar isMobile={isMobile} />
      <CloseEditModeButton />
      <ZapFixedButton />
    </HomeDataProvider>
  );
};

export default HomeCore;

const CloseEditModeButton = () => {
  const { homeEditMode, setHomeEditMode } = useContext(HomeContext);
  if (!homeEditMode) return null;
  return (
    <Button
      className="fixed bottom-4 right-4 z-8"
      onClick={() => {
        setHomeEditMode(false);
        console.log("edit mode", homeEditMode);
      }}
    >
      Fechar edição
      <Icon LucideIcon={PenOff} size="md" fill="currentColor" />
    </Button>
  );
};
