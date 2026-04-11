import type { AddressSchema } from "@/types/types";
import React, { useEffect, useState } from "react";
import { SaveAddressButton } from "./save-address-button";
import { Input, InputWrapper, Label } from "@/components/ui/index";

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
  wrapper: "w-full block border-none mb-5",
  input: `mb-4`,
};

export const InputAddress = (): React.ReactElement => {
  const [formData, setFormData] = useState<AddressSchema>({
    rua: "",
    número: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [addressComplete, setAddressComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "número"
          ? value === ""
            ? ""
            : Number(value)
          : value,
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
        <form className="w-full space-y-3">
          {inputs.map((field, index) => (
            <InputWrapper key={field.label}>
              <Label className="capitalize" htmlFor={field.label}>
                {field.label}
              </Label>
              <Input
                type={field.label === "número" ? "number" : "text"}
                id={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={formData[field.label as keyof AddressSchema]}
                required={field.label == "complemento" ? false : true}
                maxLength={field.maxLength}
                onClick={(e) => {
                  const ta = e.currentTarget as HTMLElement;
                  if (ta.dataset.cleared === "true") return;
                  ta.dataset.cleared = "true";
                }}
                onChange={handleChange}
                className={index === inputs.length - 1 ? "mb-0!" : ""}
              />
            </InputWrapper>
          ))}
        </form>
      </div>
      <SaveAddressButton Value={formData} addressComplete={addressComplete} />
    </>
  );
};
