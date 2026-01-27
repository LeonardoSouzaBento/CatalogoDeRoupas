import { Card, CardHeader, CardTitle, MuiIcon } from '@/components/ui';

export const FavoritesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="bookmark_heart" size="h3" fill className="-ml-1" />
          <h3>Favoritos</h3>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
