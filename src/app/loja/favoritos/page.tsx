import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  MuiIcon,
  PageHeader,
  PageHeaderWrapper,
  PageTitle,
} from '@/components/ui';
import { NoClothesAlert } from '@/components/store/favorites';
import { ZapFixedButton } from '@ui/index';

const Favoritos = (): React.ReactElement => {
  return (
    <>
      <PageHeader>
        <PageHeaderWrapper>
          <PageTitle>Meus Favoritos</PageTitle>
        </PageHeaderWrapper>
      </PageHeader>
      <main className={`body-wrapper`}>
        <Card>
          <CardHeader>
            <CardTitle>
              <MuiIcon icon="bookmark_heart" fill size="h3" />
              <h3>Produtos curtidos</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <NoClothesAlert />
          </CardContent>
        </Card>
        <ZapFixedButton />
      </main>
    </>
  );
};

export default Favoritos;
