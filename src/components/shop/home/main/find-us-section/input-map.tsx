import React, { useEffect, useState } from 'react';
import SaveMapButton from './save-map-button';

const css = {
  wrapper: 'min-h-full',
  wrapperInfo: 'mb-3 pt-[19] p-5 ',
  h4: 'mb-3 text-neutral-800 font-medium h4-sizes',
  ul: 'list-decimal pl-4 space-y-2 flex flex-col gap-[10]',
  li: '5 text-neutral-800 mb-0',
  textarea: 'w-full min-h-[86px] flex-center p-4 mb-3 br-md box-border',
  button: '',
};

const InputMap = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>(
    'Cole aqui o novo link copiado do Google Maps',
  );

  useEffect(() => {
    if (inputValue !== '') {
      console.log('');
    }
  }, [inputValue]);

  return (
    <>
      <div className={`${css.wrapper}`}>
        <textarea
          value={inputValue}
          onClick={(e) => {
            const ta = e.currentTarget as HTMLTextAreaElement;
            if (ta.dataset.cleared === 'true') return;
            setInputValue('');
            ta.dataset.cleared = 'true';
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className={`${css.textarea}`}
          id="novoCodigo"
          placeholder="Cole aqui o novo link copiado do Google Maps"
        />
        <div className={`${css.wrapperInfo}`}>
          <h4 className={`${css.h4}`}>Veja como pegar o link do mapa</h4>
          <ul className={`${css.ul}`}>
            <li className={`${css.li}`}>
              Pesquise no Google Maps pela sua loja ou pelo endereço dela. Clique no endereço.
            </li>
            <li className={`${css.li}`}>
              Procure o botão <span className="underline">&quot;Compartilhar&quot;</span> e clique
              nele.
            </li>
            <li className={`${css.li}`}>
              Clique no botão <span className="underline">&quot;Incorporar um mapa&quot;</span>.
            </li>
            <li className={`${css.li}`}>
              Clique no botão <span className="underline">&quot;Copiar HTML&quot;</span>.
            </li>
            <li className={`${css.li}`}>Cole no espaço cinza acima o texto copiado. Pronto.</li>
          </ul>
        </div>
      </div>
      <SaveMapButton inputValue={inputValue} />
    </>
  );
};

export default InputMap;
