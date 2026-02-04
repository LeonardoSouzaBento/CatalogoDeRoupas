'use client';
import { Card } from '../ui';
import { UserData, UserFavorites, UsersGrid } from './user-favorites/index';

const UserFavoritesCore = () => {
  return (
    <>
      <Card className={`max-w-3xl pre-lg:max-w-4xl xl:max-w-5xl`}>
        <div
          className={`flex flex-col gap-4 
            **:data-[slot='card-header']:text-theme-700 
          `}>
          <UsersGrid />
          <div
            className={`
              flex flex-col gap-4
              **:data-[slot='card-header']:border-b 
              **:data-[slot='card-header']:pb-2 
            `}>
            <UserData />
            <UserFavorites />
          </div>
        </div>
      </Card>
    </>
  );
};

export default UserFavoritesCore;
