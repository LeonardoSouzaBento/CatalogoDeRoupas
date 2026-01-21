"use client";
import React, { useState } from "react";
import PersonalForm from "./register-store/PersonalForm";
import AddressForm from "./register-store/AddressForm";
import Header from "./register-store/Header";

const RegisterStoreCore = () => {
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

export default RegisterStoreCore;
