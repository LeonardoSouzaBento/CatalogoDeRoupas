import { CardHeader, CardTitle, MuiIcon } from '@/components/ui/index';
import { SaveProductButton } from './result/save-product-button';

const css = { wrapper: `card-styles`, p: ``, button: `` };

const SaveCard = () => {
  return (
    <div className={css.wrapper}>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="bucket_check" size="h3" />
          <h3>Salvar produto</h3>
        </CardTitle>
      </CardHeader>
      <SaveProductButton />
    </div>
  );
};

export { SaveCard };

