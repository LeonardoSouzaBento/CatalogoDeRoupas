import React, { useState, useEffect } from "react";
import type { AddressSchema, ShopInfo } from "@src/types/types";
import { inputClasses } from "@src/data/styles";

const css = {
  wrapper: "w-full block border-none",
  form: "w-full",
  button: "",
  label: "font-p block size-max mb-1 font-medium text-gray-700 ",
  input: `${inputClasses} mb-[15px]`,
};

type AddressInputProps = {
  canSaveAddress: boolean;
  setAddressSaved: React.Dispatch<React.SetStateAction<boolean>>;
  shopInfo: ShopInfo;
  setShopInfo: React.Dispatch<React.SetStateAction<ShopInfo>>;
};

const AddressInput = ({
  shopInfo,
  setShopInfo,
  setAddressSaved,
  canSaveAddress,
}: AddressInputProps): React.ReactElement => {
  const [formData, setFormData] = useState<AddressSchema>({
    rua: "",
    numero: 0,
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [addressComplete, setAddressComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleRegisterAddres() {
    if (addressComplete) {
      setShopInfo({
        ...shopInfo,
        address: formData,
      });
      setAddressSaved(true);
    }
  }

  useEffect(() => {
    if (canSaveAddress) {
      handleRegisterAddres();
    }
  }, [canSaveAddress]);

  useEffect(() => {
    const isFormValid = (
      Object.keys(formData) as (keyof AddressSchema)[]
    ).every((key) => {
      if (key === "complemento") return true;

      const value = formData[key];
      if (typeof value === "string") {
        return value.trim() !== "";
      }
      return value !== 0;
    });

    setAddressComplete(isFormValid);
  }, [formData]);

  return (
    <div className={`${css.wrapper}`}>
      <form className={`${css.form}`}>
        <label htmlFor="rua" className={`${css.label}`}>
          Rua
        </label>
        <input
          type="text"
          id="rua"
          name="rua"
          placeholder="Digite sua rua"
          value={formData.rua}
          required
          maxLength={60}
          onChange={handleChange}
          className={css.input}
        />

        <label htmlFor="numero" className={`${css.label}`}>
          Número
        </label>
        <input
          type="text"
          id="numero"
          name="numero"
          value={formData.numero}
          required
          maxLength={8}
          onChange={handleChange}
          className={css.input}
        />

        <label htmlFor="complemento" className={`${css.label}`}>
          Complemento
        </label>
        <input
          type="text"
          id="complemento"
          name="complemento"
          placeholder="(Opcional)"
          value={formData.complemento}
          maxLength={50}
          onChange={handleChange}
          className={css.input}
        />

        <label htmlFor="bairro" className={`${css.label}`}>
          Bairro
        </label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          placeholder="Digite seu bairro"
          value={formData.bairro}
          required
          maxLength={50}
          onChange={handleChange}
          className={css.input}
        />

        <label htmlFor="cidade" className={`${css.label}`}>
          Cidade
        </label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          placeholder="Digite sua cidade"
          value={formData.cidade}
          required
          onChange={handleChange}
          className={css.input}
        />

        <label htmlFor="estado" className={`${css.label}`}>
          Estado
        </label>
        <input
          type="text"
          id="estado"
          name="estado"
          placeholder="Digite seu Estado"
          value={formData.estado}
          required
          onChange={handleChange}
          className={`${css.input} !mb-0`}
        />
      </form>
    </div>
  );
};

export default AddressInput;
