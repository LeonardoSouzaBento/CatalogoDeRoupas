'use client';
import { useState } from 'react';
import {
  BaseGenerator,
  FinalInfo,
  GenderButtons,
  Photos,
  ProductBasesList,
  Queue,
  Queuer,
  Result,
  SaveCard,
} from './add-product';
import { useResizeCount } from '@/hooks';
import { Tutorial } from './ui';
import { Alert, AlertDescription, AlertTitle, Icon } from '@/components/ui/index';
import { AlertCircle } from 'lucide-react';

const tutorialSteps = [
  'Adicione as fotos.',
  'Defina o gênero.',
  'Caso queira, defina uma roupa base, se houver.',
  'Defina as informações básicas.',
  'Defina as informações especificas.',
  "Confira todas as informações e depois clique em 'Salvar' para concluir o cadastro.",
];

const AddProductCore = () => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const [resizeCount, setResizeCount] = useState<number>(0);
  useResizeCount(setResizeCount);

  return (
    <div className={`max-w-3xl lg:max-w-4xl mx-auto space-y-6 mt-3`}>
      <Alert className="bg-light-bg border">
        <Icon LucideIcon={AlertCircle} />
        <AlertTitle>Importante</AlertTitle>
        <AlertDescription>
          Registre um tipo de peça de cada vez. Por exemplo: primeiro as camisetas básicas lisas,
          depois as camisas polos, e assim por diante. Isso facilita o cadastro e evita confusão.
        </AlertDescription>
      </Alert>

      <Tutorial
        title="como cadastrar"
        steps={tutorialSteps}
        cssList={`sm:flex-row sm:gap-4`}
        itemCss="sm:mb-2"
        pb={24}
        resizeCount={resizeCount}
      />
      <Queue />
      <ProductBasesList resizeCount={resizeCount} />
      <Photos />
      <GenderButtons />
      <BaseGenerator />
      <FinalInfo />
      <Result />
      <Queuer selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} />
      <SaveCard />
    </div>
  );
};

export default AddProductCore;
