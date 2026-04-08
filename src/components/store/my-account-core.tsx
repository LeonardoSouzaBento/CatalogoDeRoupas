'use client';
import { FavoritesCard, MeasuresCard, UserCard } from '@/components/store/my-account/index';
import { useUserContext } from '@/contexts/index';

export function MyAccountCore() {
  const { userData } = useUserContext();
  return (
    <div className="mx-auto space-y-6 sm:max-w-2xl md:max-w-3xl lg:max-w-212">
      <UserCard userData={userData} />
      <FavoritesCard />
      <MeasuresCard userData={userData} />
    </div>
  );
}
