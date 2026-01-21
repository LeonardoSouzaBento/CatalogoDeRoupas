import { MuiIcon } from '@/components/ui';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ProfileInfo, UserProfile } from './_user-detail';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const UserDetail = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="person" />
          <h3>Usuários</h3>
        </CardTitle>
      </CardHeader>

      <div>
        <ProfileInfo />
        <div className={`flex flex-wrap gap-4`}>
          {array.map((item) => (
            <UserProfile key={item} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export { UserDetail };
