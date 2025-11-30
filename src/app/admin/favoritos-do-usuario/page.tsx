import HeaderCard from "@ui/HeaderCard";
import TitlePage from "@ui/TitlePage";
import UserDetail from "./_components/UserDetail/UserDetail";
import CardWrapper from "@/app/loja/_ui/card-wrapper";

const css = {
  mainWrapper: `px-3 pb-6`,
  p: ``,
  h2: "",
};

const page = () => {
  return (
    <>
      <TitlePage title="Favoritos do usuário" />
      <div className={`${css.mainWrapper}`}>
        <UserDetail />

        <CardWrapper>
          <HeaderCard title="Favoritos Deste usuário" icon="bookmark_heart" />
        </CardWrapper>
      </div>
    </>
  );
};

export default page;
