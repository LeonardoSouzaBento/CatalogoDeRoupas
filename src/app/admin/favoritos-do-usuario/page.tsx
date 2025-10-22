import React from "react";
import HeaderCard from "@/ui/HeaderCard";
import { basicCardStyle } from "@/data/styles";
import TitlePage from "@/ui/TitlePage";
import Image from "next/image";
import "../page.css";

const array = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const UserCard = () => {
  const css = {
    wrapper: `h-13 w-13 relative bg-neutral-100 br-lg crop`,
    img: `object-cover size-full`,
    p: "",
  };
  return (
    <div className={`${css.wrapper}`}>
      <Image
        src={"/"}
        fill={true}
        alt="Imagem do usúario"
        className={`${css.img}`}
      />
    </div>
  );
};

const UserInfo = () => {
  const css = {
    wrapperInfo: `mb-4`,
    wrapperUserDetail: "",
    headerInfo: "h-10 flex items-center gap-2 mb-4",
    buttonExpand: "button !h-9",
    pDetail: "font-medium",
  };

  return (
    <div className={`${css.wrapperInfo}`}>
      <header className={`${css.headerInfo}`}>
        <span className="material-symbols-outlined line-span text-gray-700">
          info
        </span>
        <p className="font-medium capitalize leading-none">
          Informações deste usuário
        </p>
      </header>

      <div className={`${css.wrapperUserDetail}`}>
        <p className={`${css.pDetail}`}>Nome:</p>
        <p className={`${css.pDetail}`}>Sexo:</p>

      </div>

      <button className={`${css.buttonExpand}`}>
        Ver Mais
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </button>
    </div>
  );
};

const css = {
  mainWrapper: `px-3 pb-5`,
  wrapper: ``,
  p: ``,
  wrapperUsers: `flex flex-wrap gap-4`,
  h2: "",
};

const page = () => {
  return (
    <>
      <TitlePage title="Favoritos do usuário" />
      <div className={`${css.mainWrapper}`}>
        <div className={`${css.wrapper} ${basicCardStyle}`}>
          <HeaderCard title="Usuários" icon="person" />

          <UserInfo />

          <div className={`${css.wrapperUsers}`}>
            {array.map((item) => (
              <UserCard key={item} />
            ))}
          </div>
        </div>
        
        <div className={`${css.wrapper} ${basicCardStyle}`}>
          <HeaderCard title="Favoritos Deste usuário" icon="bookmark_heart" />
        </div>
      </div>
    </>
  );
};

export default page;
