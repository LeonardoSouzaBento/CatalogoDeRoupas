'use client';

import { Card, CardHeader, CardTitle, MuiIcon } from '@/components/ui';
import { UserDetail } from './user-favorites/user-detail';

const UserFavoritesCore = () => {
  return (
    <>
      <UserDetail />
      <Card>
        <CardHeader>
          <CardTitle className="text-theme-700">
            <MuiIcon icon="bookmark_heart" fill size="h4" />
            <h4>Favoritos Deste usuário</h4>
          </CardTitle>
        </CardHeader>
      </Card>
    </>
  );
};

export default UserFavoritesCore;
