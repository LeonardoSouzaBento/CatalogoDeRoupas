import { FavoritesCard, MeasuresCard, UserCard } from '@/components/store/my-account/index';
import { UserContext } from '@/contexts';
import { useContext } from 'react';

const css = {
  wrapper: `bg-white br-lg p-5`,
};

export function MyAccountCore() {
  const { userData } = useContext(UserContext);
  return (
    <div>
      <UserCard userData={userData} />
      <FavoritesCard />
      <MeasuresCard userData={userData} />
    </div>
  );
}
