'use client';
import { NoClothesAlert } from '@/components/store/favorites';
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
import { ZapFixedButton } from '@ui/index';
import React from 'react';

const Favoritos = (): React.ReactElement => {
  return (
    <>
      <PageHeader className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <PageHeaderWrapper>
          <PageTitle>Meus Favoritos</PageTitle>
        </PageHeaderWrapper>
      </PageHeader>
      <main className={`body-wrapper`}>
        <Card className="max-w-max">
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
