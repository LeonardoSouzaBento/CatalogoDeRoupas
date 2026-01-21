import { Card, CardHeader, CardTitle, MuiIcon } from '@/components/ui';

export const FavoritesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="bookmark_heart" size="h3" fill={1} className="-ml-2.5" />
          Meus favoritos
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
