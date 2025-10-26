import React from "react";
import { Share2, Search, Heart } from "lucide-react";
import { ButtonCall, MainImage } from "../Main/components/index";
import { sectionHomeStyles, pStyles } from "@app/(landing-page)/styles";

const css = {
  section: "",
  wrapper:
    "block flex flex-col justify-center md:flex-row gap-3 xl:items-center",
  wrapperInfo: "w-auto flex flex-col gap-6 md:w-1/2 max-w-100",
  wrapperImg: "w-full md:w-1/2 flex flex-col gap-3",
};

const HowSection = (): React.ReactElement => {
  return (
    <section className={sectionHomeStyles}>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperInfo}`}>
          <Messages />
          <ButtonCall hideInMobile={true} specifStyles="justify-center" />
        </div>

        <div className={`${css.wrapperImg}`}>
          <MainImage />
          <ButtonCall specifStyles="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default HowSection;

const content = [
  { id: 1, text: "Compartilhe o link nas redes sociais", icon: Share2 },
  {
    id: 2,
    text: "Seu cliente busca e favorita os produtos com facilidade",
    icon: Search,
  },
  {
    id: 3,
    text: "Veja os favoritos do usuário de modo organizado",
    icon: Heart,
  },
];

const Messages = () => {
  const css = {
    wrapper: "w-auto flex items-start gap-3 sm:flex-row ",
    wrapperP: "flex items-center",
    wrapperPNumber:
      "h-7 min-w-7 flex justify-center items-center rounded-[50%] bg-[#DF2080]",
    pNumber:
      "!text-white font-semibold font-p text-[1.200em] sm:text-[1.250em] md:text-[1.274em] lg:text-[1.322em] xl:text-[1.370em] 2xl:text-[1.418em]",
    p: `-mt-[1px] ${pStyles}`,
    wrapperIcon: "inline-flex items-start justify-center box-border mb-1",
  };

  return (
    <>
      {content.map((item) => (
        <div className={`${css.wrapper}`} key={item.id}>
          <div className={`${css.wrapperPNumber}`}>
            <p className={`${css.pNumber}`}>{item.id}</p>
          </div>
          <div className={`${css.wrapperP}`}>
            <p className={`${css.p}`}>
              {item.text}. {" "}
              <span className={`${css.wrapperIcon}`}>
                <item.icon color="#DF2080" strokeWidth={2.2} size={22} />
              </span>{" "}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
