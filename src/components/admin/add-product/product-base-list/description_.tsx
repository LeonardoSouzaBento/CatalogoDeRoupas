'use client';
import { Alert, AlertDescription, AlertTitle, Icon } from '@/components/ui';
import { Info } from 'lucide-react';

interface DescriptionProps {
  selectedName: string;
}

const Description = ({ selectedName }: DescriptionProps) => {
  const [firstPart, restPart] = selectedName
    ? selectedName.split(/–(.+)/).map((s) => s.trim())
    : ['', ''];

  return (
    <Alert>
      <Icon LucideIcon={Info} />
      <AlertTitle>Descrição completa</AlertTitle>
      <AlertDescription>
        <p>
          {selectedName ? (
            <>
              {firstPart} - {restPart}
            </>
          ) : (
            <span>Selecione um item caso queira</span>
          )}
        </p>
      </AlertDescription>
    </Alert>
  );
};

export { Description };
