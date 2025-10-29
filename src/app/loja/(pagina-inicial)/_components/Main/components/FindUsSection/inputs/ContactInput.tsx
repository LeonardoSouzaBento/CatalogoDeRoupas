import React, { useEffect, useState } from "react";
import SaveZapButton from "../components/SaveZapButton";

const ContactInput = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");
  const [zapErrors, setZapErrors] = useState<string[]>([""]); //length, without9, ddd
  // const [canSave, setCanSave] = useState<boolean>(false);

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
  }, [inputValue]);

  return (
    <>
      <div className={`mb-5`}>
        <input
          type="text"
          aria-label="Número do WhatsApp"
          placeholder="Apenas números"
          className={`input`}
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
      <SaveZapButton setZapErrors={setZapErrors} inputValue={inputValue} />
    </>
  );
};

export default ContactInput;
