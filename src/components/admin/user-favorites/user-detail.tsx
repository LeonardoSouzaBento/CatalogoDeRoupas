import { MuiIcon } from '@/components/ui';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ProfileInfo, UsersGrid } from './_user-detail';

const UserDetail = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-theme-700">
          <MuiIcon icon="person" fill size="h3" />
          <h3>Usuários</h3>
        </CardTitle>
      </CardHeader>

      <div>
        <div className={`flex flex-wrap gap-4`}>
          <UsersGrid />
        </div>
      </div>
      <ProfileInfo />
    </Card>
  );
};

export { UserDetail };
