import HeaderCard from "@ui/HeaderCard";
import TitlePage from "@ui/TitlePage";
import UserDetail from "./_components/UserDetail/UserDetail";

const css = {
  mainWrapper: `px-3 pb-6`,
  wrapper: ``,
  p: ``,
  h2: "",
};

const page = () => {
  return (
    <>
      <TitlePage title="Favoritos do usuário" />
      <div className={`${css.mainWrapper}`}>
        <UserDetail />

        <div className={`${css.wrapper} basic-card-style`}>
          <HeaderCard title="Favoritos Deste usuário" icon="bookmark_heart" />
        </div>
      </div>
    </>
  );
};

export default page;
