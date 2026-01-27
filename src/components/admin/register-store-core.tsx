'use client';
import React, { useState } from 'react';
import { PersonalForm, AddressForm, Header } from './register-store/index';

const RegisterStoreCore = () => {
  const [seeAddresForm, setSeeAddresForm] = useState<boolean>(false);

  return (
    <div>
      <Header seeAddresForm={seeAddresForm} setSeeAddresForm={setSeeAddresForm} />
      <div className="bg-light-bg p-6 pt-4 shadow-lg hover:shadow-lg-hover rounded-lg">
        {!seeAddresForm ? <PersonalForm /> : <AddressForm setSeeAddresForm={setSeeAddresForm} />}
      </div>
    </div>
  );
};

export default RegisterStoreCore;
