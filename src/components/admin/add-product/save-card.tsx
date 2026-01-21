import React from 'react';
import { SaveProductButton } from './result/save-product-button';
import { HeaderCard } from '@/app/_ui';

const css = { wrapper: `card-styles`, p: ``, button: `` };

const SaveCard = () => {
  return (
    <div className={css.wrapper}>
      <HeaderCard title="Salvar produto" icon="bucket_check" iconStyles="" />
      <SaveProductButton />
    </div>
  );
};

export { SaveCard };
