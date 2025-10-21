import React, { useState, useEffect } from "react";
import type { ShopInfo } from "@src/types/types";
import { inputClasses } from "@src/data/styles";

const css = {
  wrapperInput: "w-full",
  wrapper: "",
  button: "",
  input: inputClasses,
};

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

type ContactInputProps = {
  setPhoneSaved: React.Dispatch<React.SetStateAction<boolean>>;
  shopInfo: ShopInfo;
  setShopInfo: React.Dispatch<React.SetStateAction<ShopInfo>>;
  canSavePhone: boolean;
};

const ContactInput = ({
  setPhoneSaved,
  shopInfo,
  setShopInfo,
  canSavePhone,
}: ContactInputProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");
  const [zapErrors, setZapErrors] = useState<string[]>([""]); //length, without9, ddd

  function handleEnterZapNumber() {
    const result = validateWhatsapp(inputValue);
    setZapErrors(result.errors);

    if (result.valid) {
      setShopInfo({ ...shopInfo, contact: inputValue });
      setPhoneSaved(true);
    }
  }

  useEffect(() => {
    if (canSavePhone) {
      handleEnterZapNumber();
    }
  }, [canSavePhone]);

  useEffect(() => {
    const digits = inputValue.replace(/\D/g, "");
    if (digits.length >= 10) {
      let formatted = digits;

      // Formata com padrão brasileiro: (DD) 9XXXX-XXXX
      if (digits.length === 10) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(
          2,
          6
        )}-${digits.slice(6)}`;
      } else if (digits.length === 11) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(
          2,
          7
        )}-${digits.slice(7)}`;
      }
      setInputValue(formatted);
    }
  }, []);

  return (
    <div className={`${css.wrapper}`}>
      <input
        type="text"
        placeholder="xx xxxxx-xxxx"
        className={`${css.input}`}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {zapErrors.length > 0 && (
        <ul className="text-red-600 text-sm">
          {zapErrors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactInput;
