import { MuiIcon, PageHeader, PageTitle } from '@/components/ui';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import UserFavoritesCore from '@/components/admin/user-favorites-core';

const page = () => {
  return (
    <>
      <PageHeader>
        <PageTitle>Favoritos do usuário</PageTitle>
      </PageHeader>
      <div className={`px-3 pb-6`}>
        <UserFavoritesCore />

        <Card>
          <CardHeader>
            <CardTitle>
              <MuiIcon icon="bookmark_heart" />
              Favoritos Deste usuário
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default page;
