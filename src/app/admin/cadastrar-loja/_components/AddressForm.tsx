import { HeaderCard } from "@/app/loja/_ui";
import BackButton from "@/app/loja/_ui/BackButton";
import SaveButton from "@/app/loja/_ui/SaveButton";
import type { AddressSchema, BooleanSetter } from "@/types/types";
import React, { useEffect, useState } from "react";

const inputs = [
  {
    label: "rua",
    placeholder: "Digite sua rua",
    maxLength: 60,
  },
  {
    label: "número",
    placeholder: "Digite o número",
    maxLength: 8,
  },
  {
    label: "complemento",
    placeholder: "(Opcional)",
    maxLength: 50,
  },
  {
    label: "bairro",
    placeholder: "Digite seu bairro",
    maxLength: 50,
  },
  {
    label: "cidade",
    placeholder: "Digite sua cidade",
    maxLength: 60,
  },
  {
    label: "estado",
    placeholder: "Digite seu Estado",
    maxLength: 2,
  },
];

const css = {
  input: `mb-4`,
};

const AddressForm = ({
  setSeeAddresForm,
}: {
  setSeeAddresForm: BooleanSetter;
}): React.ReactElement => {
  const [formData, setFormData] = useState<AddressSchema>({
    rua: "",
    número: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [addressComplete, setAddressComplete] = useState(false);

  async function handleSaveAddress() {
    console.log("Sm");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "número"
          ? e.target.value === ""
            ? ""
            : Number(e.target.value)
          : e.target.value,
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
      <div>
        <HeaderCard
          title="Endereço"
          wrapperStyles="mb-3.5!"
          icon="location_home"
          iconStyles=" font-medium!"
        />
        <form className={`mb-5 px-0.5 pb-5 bs-b bs-color`}>
          {inputs.map((field, index) => (
            <div key={field.label}>
              <label htmlFor={field.label}>{field.label}</label>
              <input
                type={field.label === "número" ? "number" : "text"}
                id={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={formData[field.label as keyof AddressSchema]}
                required={field.label == "complemento" ? false : true}
                maxLength={field.maxLength}
                onClick={(e) => {
                  const ta = e.currentTarget as HTMLInputElement;
                  if (ta.dataset.cleared === "true") return;
                  ta.dataset.cleared = "true";
                }}
                onChange={handleChange}
                className={`${css.input} ${
                  index === inputs.length - 1 ? "mb-0!" : ""
                }`}
              />
            </div>
          ))}
        </form>
      </div>

      <SaveButton
        text="Salvar endereço"
        Function={handleSaveAddress}
        styles="mb-5"
      />

      <BackButton setState={setSeeAddresForm}/>
    </>
  );
};

export default AddressForm;
