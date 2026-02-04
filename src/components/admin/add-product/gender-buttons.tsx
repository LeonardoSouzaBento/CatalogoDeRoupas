'use client';
import { Button, Card, CardHeader, CardTitle, MuiIcon, ButtonsWrapper } from '@/components/ui';
import { UserContext } from '@/contexts/index';
import { Gender } from '@/types/types';
import React, { useContext } from 'react';

const buttons: { label: string; value: Gender; icon?: string }[] = [
  { label: 'Masculino', value: 'masculino', icon: 'male' },
  { label: 'Feminino', value: 'feminino', icon: 'female' },
];

const GenderButtons = () => {
  const { selectedGender, setSelectedGender } = useContext(UserContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="wc" size="h4" />
          <h3>Gênero</h3>
        </CardTitle>
      </CardHeader>
      <ButtonsWrapper>
        {buttons.map(({ label, value }) => (
          <Button
            key={value}
            variant="ghost"
            data-selected={selectedGender === value}
            onClick={() => setSelectedGender(value)}>
            {label}
          </Button>
        ))}
      </ButtonsWrapper>
    </Card>
  );
};

export { GenderButtons };
