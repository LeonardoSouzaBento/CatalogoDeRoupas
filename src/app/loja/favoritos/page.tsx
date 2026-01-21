import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  MuiIcon,
  PageHeader,
  PageTitle,
} from '@/components/ui';
import { NoClothesAlert } from '@/components/store/favorites';
import { ZapFixedButton } from '@ui/index';

const Favoritos = (): React.ReactElement => {
  return (
    <>
      <PageHeader className="px-3">
        <PageTitle>Meus Favoritos</PageTitle>
      </PageHeader>
      <div className={`px-3 pb-5`}>
        <Card>
          <CardHeader>
            <CardTitle>
              <MuiIcon icon="bookmark_heart" />
              Produtos curtidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <NoClothesAlert />
          </CardContent>
        </Card>
        <ZapFixedButton />
      </div>
    </>
  );
};

export default Favoritos;
