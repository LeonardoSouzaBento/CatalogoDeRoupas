import { HeaderCard } from '@/app/_ui';
import UserInfo from './components/UserInfo';
import UserPhoto from './components/UserPhoto';
import CardWrapper from '@/components/ui/card-wrapper';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const css = {
  mainWrapper: `px-3 pb-6`,
  p: ``,
  wrapperUsers: `flex flex-wrap gap-4`,
  h2: '',
};

const UserDetail = () => {
  return (
    <CardWrapper>
      <HeaderCard title="Usuários" icon="person" />

      <div className={``}>
        <UserInfo />
        <div className={`${css.wrapperUsers}`}>
          {array.map((item) => (
            <UserPhoto key={item} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default UserDetail;
