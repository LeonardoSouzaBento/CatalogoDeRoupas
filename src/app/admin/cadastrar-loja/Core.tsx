"use client";
import React, { useState } from "react";
import PersonalForm from "./_components/PersonalForm";
import AddressForm from "./_components/AddressForm";
import Header from "./_components/Header";

const Core = () => {
  const [seeAddresForm, setSeeAddresForm] = useState<boolean>(false);
  
  return (
    <div>
      <Header
        seeAddresForm={seeAddresForm}
        setSeeAddresForm={setSeeAddresForm}
      />
      <div className="bg-white p-6 pt-4 shadow-lg hover:shadow-lg-hover br-lg">
        {!seeAddresForm ? (
          <PersonalForm />
        ) : (
          <AddressForm setSeeAddresForm={setSeeAddresForm} />
        )}
      </div>
    </div>
  );
};

export default Core;
