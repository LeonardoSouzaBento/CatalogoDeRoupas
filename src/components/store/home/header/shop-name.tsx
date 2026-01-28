import { Card, Icon, Input, InputWrapper, Label } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { PublicDataContext } from '@/contexts/publicDataContext_';
import type { BooleanSetter } from '@/types/types';
import { ChevronLeft, CircleCheckBig } from 'lucide-react';
import React, { useContext, useState } from 'react';

const css = {
  container: 'fixed inset-0 bg-black/3 px-4 backdrop-blur-xs pt-3 pb-3 z-8 ',
  formWrapper: 'h-max m-auto max-w-lg flex flex-col gap-4 relative shadow-xl',
};

type NameShopProps = {
  setSeeNameShop: BooleanSetter;
};

const ShopName = ({ setSeeNameShop }: NameShopProps): React.ReactElement => {
  const [Value, setValue] = useState<string>('');
  const { shopInfo, setShopInfo } = useContext(PublicDataContext);

  async function handleEdit() {
    if (Value.length >= 6) {
      setShopInfo({ ...shopInfo, name: Value });
    }
  }

  return (
    <div
      className={`${css.container}`}
      onClick={() => {
        setSeeNameShop(false);
      }}>
      <Card data-no-header className={`${css.formWrapper}`}>
        <InputWrapper>
          <Label htmlFor="name">Digite o nome da sua loja</Label>
          <Input
            id="name"
            name="name"
            value={Value}
            placeholder="Digite aqui"
            onChange={(e) => setValue(e.target.value)}
          />
        </InputWrapper>

        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleEdit();
          }}
          className="w-full">
          <Icon LucideIcon={CircleCheckBig} />
          Salvar
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setSeeNameShop(false);
          }}
          variant="secondary">
          <Icon LucideIcon={ChevronLeft} />
          Voltar
        </Button>
      </Card>
    </div>
  );
};

export { ShopName };
