import { SectionHeader } from "@/components/store/home/ui/index";
import { usePublicDataContext } from "@/contexts/index";
import { useLocalEditMode } from "@/hooks";
import { AboutInput } from "./about-section/about-input";

const css = {
  wrapperAbout: "m-auto relative",
  wrapperP: "size-full relative z-0 mb-4 last:mb-0",
  p: "pb-3 relative last:pb-0 text-muted-foreground",
};

export const AboutSection = () => {
  const [editMode, setEditMode] = useLocalEditMode();
  const { shopInfo, setShopInfo } = usePublicDataContext();

  return (
    <div
      className="max-w-210 h-auto
        p-6 pt-0 rounded-md mx-auto"
    >
      <SectionHeader
        section="about"
        title="Sobre Nós"
        subtitle="Conheça mais a nossa loja"
        editMode={editMode}
        setEditMode={setEditMode}
      />
      {!editMode ? (
        <div className={`${css.wrapperAbout}`}>
          {shopInfo.aboutText.map((paragraph: string, index: number) => (
            <div className={`${css.wrapperP}`} key={index}>
              <p key={index} className={`${css.p}`}>
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <AboutInput
          shopInfo={shopInfo}
          setShopInfo={setShopInfo}
          setSeeInput={setEditMode}
        />
      )}
    </div>
  );
};
