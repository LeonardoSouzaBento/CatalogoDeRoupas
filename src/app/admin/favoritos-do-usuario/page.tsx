import UserFavoritesCore from "@/components/admin/user-favorites-core";
import { PageHeader, PageHeaderWrapper, PageTitle } from "@/components/ui";

const page = () => {
  return (
    <>
      <PageHeader className="px-3 sm:px-6">
        <PageHeaderWrapper className="max-w-3xl bp-930:max-w-4xl xl:max-w-5xl">
          <PageTitle>Favoritos do usuário</PageTitle>
        </PageHeaderWrapper>
      </PageHeader>
      <div className={`pt-3 px-3 sm:px-6 pb-6 max-w-max mx-auto`}>
        <UserFavoritesCore />
      </div>
    </>
  );
};

export default page;
