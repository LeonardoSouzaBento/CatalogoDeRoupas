import React from "react";
import { Check } from "lucide-react";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { StateSetter } from "@/types/types";

function validateWhatsapp(number: string) {
  const digits = number.replace(/\D/g, "");
  const errors: string[] = [];

  if (digits.length < 10 || digits.length > 11) {
    errors.push("O número deve ter entre 10 e 11 dígitos.");
  }

  const ddd = digits.slice(0, 2);
  if (Number(ddd) < 11 || Number(ddd) > 99) {
    errors.push("O DDD deve estar entre 11 e 99.");
  }

  if (/^(\d)\1+$/.test(digits)) {
    errors.push("O número não pode conter todos os dígitos iguais.");
  }

  const prefix = digits.length === 11 ? digits[2] : null;
  if (prefix && prefix !== "9") {
    errors.push("O número deve começar com 9 após o DDD.");
  }

  return {
    valid: errors.length === 0,
    errors,
    formatted: digits, // pode ser usado se quiser formatar depois
  };
}

const SaveZapButton = ({
  inputValue,
  setZapErrors,
}: {
  inputValue: string;
  setZapErrors: StateSetter<string[]>;
}) => {
  function handleSave() {
    console.log(inputValue);
    const result = validateWhatsapp(inputValue);
    setZapErrors(result.errors);

    if (result.valid) {
      // setShopInfo({ ...shopInfo, contact: inputValue });
      // setPhoneSaved(true);
    }
  }

  return (
    <button className="button min-w-max" onClick={handleSave}>
      Salvar Whatsapp
      <Check {...iconMdStyles} />
    </button>
  );
};

export default SaveZapButton;
