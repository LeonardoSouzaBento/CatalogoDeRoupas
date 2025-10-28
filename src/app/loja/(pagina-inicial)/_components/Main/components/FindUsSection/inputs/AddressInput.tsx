import type { AddressSchema } from "@/types/types";
import React, { useEffect, useState } from "react";
import SaveAddressButton from "../components/SaveAddressButton";

const inputs = [
  {
    id: "rua",
    label: "Rua",
    placeholder: "Digite sua rua",
    required: true,
    maxLength: 60,
    type: "text",
  },
  {
    id: "numero",
    label: "Número",
    placeholder: "",
    required: true,
    maxLength: 8,
    type: "text",
  },
  {
    id: "complemento",
    label: "Complemento",
    placeholder: "(Opcional)",
    required: false,
    maxLength: 50,
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    placeholder: "Digite seu bairro",
    required: true,
    maxLength: 50,
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    placeholder: "Digite sua cidade",
    required: true,
    maxLength: 60,
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    placeholder: "Digite seu Estado",
    required: true,
    maxLength: 2,
    type: "text",
  },
];

const css = {
  wrapper: "w-full block border-none",
  form: "w-full",
  button: "",
  label: " block size-max mb-1 font-medium text-gray-700 ",
  input: `input mb-[15px]`,
};

const AddressInput = (): React.ReactElement => {
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
    <>
      <div className={`${css.wrapper}`}>
        <form className={`${css.form}`}>
          {inputs.map((field, index) => (
            <div key={field.id}>
              <label htmlFor={field.id} className={css.label}>
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id as keyof AddressSchema]}
                required={field.required}
                maxLength={field.maxLength}
                onChange={handleChange}
                className={`${css.input} ${
                  index === inputs.length - 1 ? "!mb-0" : ""
                }`}
              />
            </div>
          ))}
        </form>
      </div>
      <SaveAddressButton
        inputValue={formData}
        addressComplete={addressComplete}
      />
    </>
  );
};

export default AddressInput;
