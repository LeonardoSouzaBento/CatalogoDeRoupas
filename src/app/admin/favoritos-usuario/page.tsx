import HeaderCard from '@/components/ui/HeaderCard';
import TitlePage from '@/components/ui/page-title';
import UserDetail from '../../../components/admin/user-favorites/_components/UserDetail/UserDetail';
import { Card } from '@/components/ui/card';

const css = {
  mainWrapper: `px-3 pb-6`,
  p: ``,
  h2: '',
};

const page = () => {
  return (
    <>
      <TitlePage title="Favoritos do usuário" />
      <div className={`${css.mainWrapper}`}>
        <UserDetail />

        <Card>
          <HeaderCard title="Favoritos Deste usuário" icon="bookmark_heart" />
        </Card>
      </div>
    </>
  );
};

export default page;
