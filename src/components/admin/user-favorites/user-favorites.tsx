import { CardHeader, CardTitle } from '@/components/ui';
import { MuiIcon } from '@/components/ui/index';

export const UserFavorites = () => {
  return (
    <div className="rounded-md">
      <CardHeader data-slot="card-header">
        <CardTitle data-card-title>
          <MuiIcon icon="bookmark_heart" size="h5" fill />
          <h5>Favoritos do usuário</h5>
        </CardTitle>
      </CardHeader>
    </div>
  );
};
