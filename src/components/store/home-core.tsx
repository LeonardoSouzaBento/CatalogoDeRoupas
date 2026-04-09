"use client";
import { Footer, Main, OptionsMenu } from "@/components/store/home/";
import { Button } from "@/components/ui/button";
import { ZapFixedButton } from "@/components/ui/index";
import { Icon } from "@/components/ui/lucide-icon";
import { useHomeContext } from "@/contexts";
import { useMatchMedia } from "@/hooks";
import { PenOff } from "lucide-react";
import { useState } from "react";
import { Header } from "./home/header/header";

const HomeCore = () => {
  const [seeOptionsSection, setSeeOptionsSection] = useState<boolean>(false);
  const resizeCount = useMatchMedia();

  return (
    <>
      <Header
        resizeCount={resizeCount}
        setSeeOptionsSection={setSeeOptionsSection}
      />
      {seeOptionsSection && (
        <OptionsMenu setSeeOptionsSection={setSeeOptionsSection} />
      )}
      <Main />
      <Footer />
      <CloseEditModeButton />
      <ZapFixedButton />
    </>
  );
};

export default HomeCore;

const CloseEditModeButton = () => {
  const { homeEditMode, setHomeEditMode } = useHomeContext();
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
      <Icon Svg={PenOff} size="md" fill="currentColor" />
    </Button>
  );
};
