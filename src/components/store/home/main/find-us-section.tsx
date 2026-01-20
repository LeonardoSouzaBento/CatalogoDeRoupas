import WrapperHome from '@/app/_ui/WrapperHome';
import { SectionHeader } from '@/components/store/home/main/section-header';
import ButtonSeeEditMode from '@/components/store/home/ui/button-see-edit-mode';
import { PublicDataContext } from '@/contexts/index';
import type { AddressSchema } from '@/types/types';
import React, { useContext, useState } from 'react';
import { ButtonCopy, InputAddress, InputContact, InputMap } from './find-us-section/index';

const css = {
  wrapper: 'w-full m-auto max-w-210 flex flex-col gap-5',
  container: `w-full p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 
    br-lg bg-white border-gray-200 shadow-lg hover:shadow-lg-hover fast-trans relative`,
  containerhomeEditMode: 'sm:!flex-col !items-start pt-3 gap-4 ',
  wrapperInfo: 'w-full flex justify-start items-center flex-auto gap-4',
  wrapperMap: 'w-full h-[108vw] max-h-[480px]',
  wrapperMaphomeEditMode: '!h-auto !min-h-max p-5 pt-4',
  firstP: 'mb-3 leading-none!',
  wrapperPs: 'relative',
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
    <>
      <SectionHeader
        title="Nos Encontre"
        subtitle="Visite nossa loja ou fale conosco"
        sectionEditMode={sectionEditMode}
        setSectionEditMode={setSectionEditMode}
      />

      <div>
        <div className={`${css.wrapper}`}>
          <div className={`${css.container} ${seePhone && css.containerhomeEditMode}`}>
            {/* Telefone */}
            {!seePhone ? (
              <>
                <div className={`${css.wrapperInfo}`}>
                  <span className="material-symbols-rounded ">call</span>
                  <div className={`${css.wrapperPs}`}>
                    <p className={`${css.firstP}`}>
                      <strong>Whatsapp:</strong>
                    </p>
                    <p>{shopInfo.contact}</p>
                  </div>
                </div>
                <ButtonCopy
                  state={phoneCopied}
                  setState={setPhoneCopied}
                  firstText="Copiar Telefone"
                  secondText="Telefone copiado!"
                  textToCopy={shopInfo.contact}
                />
                {sectionEditMode && <ButtonSeeEditMode setState={setSeePhone} />}
              </>
            ) : (
              <WrapperHome title="Adicione Seu Whatsapp" setState={setSeePhone}>
                <InputContact />
              </WrapperHome>
            )}
          </div>
          {/* Endereço */}
          <div className={`${css.container} ${seeAddress && css.containerhomeEditMode}`}>
            {!seeAddress ? (
              <>
                <div className={`${css.wrapperInfo}`}>
                  <span className={`material-symbols-rounded`}>home_pin</span>
                  <div className={`${css.wrapperPs}`}>
                    <p className={`${css.firstP}`}>
                      <strong>Onde estamos:</strong>
                    </p>
                    <p>{shopAddressFormatted}</p>
                  </div>
                </div>
                <ButtonCopy
                  state={addressCopied}
                  setState={setAddressCopied}
                  firstText="Copiar Link Do Mapa"
                  secondText="Link copiado!"
                  textToCopy={shopAddressFormatted}
                />
                {sectionEditMode && <ButtonSeeEditMode setState={setSeeAddress} />}
              </>
            ) : (
              <WrapperHome title="Adicione Seu Endereço" setState={setSeeAddress}>
                <InputAddress />
              </WrapperHome>
            )}
          </div>
          {/* Mapa */}
          <div
            className={`${css.container} ${css.wrapperMap} ${
              seeMap && css.wrapperMaphomeEditMode
            }`}>
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
                  <ButtonSeeEditMode setState={setSeeMap} styles="absolute top-3 right-0" />
                )}
              </>
            ) : (
              <WrapperHome title="Atualize Seu Mapa" setState={setSeeMap}>
                <InputMap />
              </WrapperHome>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
