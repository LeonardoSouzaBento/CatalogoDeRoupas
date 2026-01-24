import { InputWrapper } from '@/components/store/home/ui/index';
import { SectionHeader } from '@/components/store/home/ui/index';
import { ButtonSeeEditMode } from '@/components/store/home/ui/button-see-edit-mode';
import { PublicDataContext } from '@/contexts/index';
import type { AddressSchema } from '@/types/types';
import React, { useContext, useState } from 'react';
import { CopyButton, InputAddress, InputContact, InputMap } from './find-us-section/index';
import { MuiIcon } from '@/components/ui';

const css = {
  wrapper: 'w-full m-auto max-w-210 grid grid-cols-1 gap-4',
  container: `w-full p-6 pt-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 
  round-md bg-white border-gray-200 shadow-md hover:shadow-lg fast-trans relative`,
  containerEditMode: 'sm:!flex-col !items-start pt-3 gap-4 ',
  infoWrapper: `w-full flex justify-start items-start flex-auto gap-3 
  [&>div>span]:text-female [&>div>span]:mt-[1em]`,
  mapWrapper: 'w-full h-[108vw] max-h-[480px]',
  mapWrapperEditMode: '!h-auto !min-h-max p-5 pt-4',
  textWrapper: `relative space-y-0.5 [&>p:first-child]:text-lg [&>p:first-child]:font-semibold
  [&>p:last-child]:text-muted-foreground`,
};

function formatAddress(address: AddressSchema): string {
  const { rua, número, complemento, bairro, cidade, estado } = address;

  const parts = [rua, `${número}${complemento ? ` - ${complemento}` : ''}`, bairro, cidade, estado];

  return parts.filter(Boolean).join(', ');
}

export const FindUsSection = (): React.ReactElement => {
  const { shopInfo } = useContext(PublicDataContext);
  //foi copiado
  const [phoneCopied, setPhoneCopied] = useState<boolean>(false);
  const [addressCopied, setAddressCopied] = useState<boolean>(false);
  //ver
  const [seePhone, setSeePhone] = useState<boolean>(false);
  const [seeAddress, setSeeAddress] = useState<boolean>(false);
  const [seeMap, setSeeMap] = useState<boolean>(false);

  const shopAddressFormatted = formatAddress(shopInfo.address);
  const [sectionEditMode, setSectionEditMode] = useState<boolean>(false);

  return (
    <div>
      <SectionHeader
        title="Nos Encontre"
        subtitle="Visite nossa loja ou fale conosco"
        sectionEditMode={sectionEditMode}
        setSectionEditMode={setSectionEditMode}
      />

      <div>
        <div className={`${css.wrapper}`}>
          <div className={`${css.container} ${seePhone && css.containerEditMode}`}>
            {/* Telefone */}
            {!seePhone ? (
              <>
                <div className={`${css.infoWrapper}`}>
                  <MuiIcon icon="call" fill={1} size="h5" />
                  <div className={`${css.textWrapper}`}>
                    <p>Whatsapp:</p>
                    <p>{shopInfo.contact}</p>
                  </div>
                </div>
                <CopyButton
                  className="min-w-57"
                  state={phoneCopied}
                  setState={setPhoneCopied}
                  firstText="Copiar Telefone"
                  secondText="Telefone copiado!"
                  textToCopy={shopInfo.contact}
                />
                {sectionEditMode && <ButtonSeeEditMode setState={setSeePhone} />}
              </>
            ) : (
              <InputWrapper title="Adicione Seu Whatsapp" setState={setSeePhone}>
                <InputContact />
              </InputWrapper>
            )}
          </div>
          {/* Endereço */}
          <div className={`${css.container} ${seeAddress && css.containerEditMode}`}>
            {!seeAddress ? (
              <>
                <div className={`${css.infoWrapper}`}>
                  <MuiIcon icon="home_pin" fill={1} size="h4" weight={500} />
                  <div className={`${css.textWrapper}`}>
                    <p>Onde estamos:</p>
                    <p>{shopAddressFormatted}</p>
                  </div>
                </div>
                <CopyButton
                  state={addressCopied}
                  setState={setAddressCopied}
                  firstText="Copiar Link Do Mapa"
                  secondText="Link copiado!"
                  textToCopy={shopAddressFormatted}
                />
                {sectionEditMode && <ButtonSeeEditMode setState={setSeeAddress} />}
              </>
            ) : (
              <InputWrapper title="Adicione Seu Endereço" setState={setSeeAddress}>
                <InputAddress />
              </InputWrapper>
            )}
          </div>
          {/* Mapa */}
          <div className={`${css.container} ${css.mapWrapper} ${seeMap && css.mapWrapperEditMode}`}>
            {!seeMap ? (
              <>
                <iframe
                  className="rounded-md"
                  src={shopInfo.urlMap}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {sectionEditMode && (
                  <ButtonSeeEditMode setState={setSeeMap} className="absolute top-3 right-0" />
                )}
              </>
            ) : (
              <InputWrapper title="Atualize Seu Mapa" setState={setSeeMap}>
                <InputMap />
              </InputWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
