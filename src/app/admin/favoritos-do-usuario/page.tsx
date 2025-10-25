import HeaderCard from "@ui/HeaderCard";
import { basicCardStyle } from "@/data/styles";
import TitlePage from "@ui/TitlePage";
import UserPhoto from "./_components/UserPhoto";
import UserInfo from "./_components/UserInfo";
import "../../loja/(pagina-inicial)/page.css"

const array = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

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
              <UserPhoto key={item} />
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
