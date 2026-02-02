import UserFavoritesCore from '@/components/admin/user-favorites-core';
import { PageHeader, PageHeaderWrapper, PageTitle } from '@/components/ui';

const page = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderWrapper>
          <PageTitle>Favoritos do usuário</PageTitle>
        </PageHeaderWrapper>
      </PageHeader>
      <div className={`px-3 pb-6`}>
        <UserFavoritesCore />
      </div>
    </>
  );
};

export default page;
