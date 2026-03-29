import { CTAButton } from "./cta-button";
import { Iphone15Pro } from "./iphone";

const MainImage = ({ src = "/home/phone3.png" }: { src: string }) => {
  return (
    <div
      className="w-full h-146 p-6 flex items-start justify-center gap-4 bg-medium-bg
      relative rounded-b-2xl crop border border-border/33"
    >
      <Iphone15Pro src={src} />
      <Iphone15Pro
        src={src}
        className="hidden bp-576:block bp-930:hidden xl:block"
      />
      <div className="absolute h-max py-6 w-full bottom-0 left-0 flex-center">
        <CTAButton hideInMobile={true} />
        <CTAButton hideInMobile={false} />
      </div>
    </div>
  );
};

export { MainImage };
