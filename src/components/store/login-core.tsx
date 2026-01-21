'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ButtonLoginGoogle, ButtonLoginEmail, EmailForm } from './login/index';

const LoginCore = () => {
  const [seeEmailForm, setSeeEmailForm] = useState<boolean>(false);

  return (
    <Card>
      {!seeEmailForm ? (
        <>
          <CardHeader>
            <CardTitle>
              <h3>Fazer Login</h3>
            </CardTitle>
          </CardHeader>
          <ButtonLoginGoogle />
          <ButtonLoginEmail seeEmailForm={seeEmailForm} setSeeEmailForm={setSeeEmailForm} />
        </>
      ) : (
        <EmailForm setSeeEmailForm={setSeeEmailForm} />
      )}
    </Card>
  );
};

export default LoginCore;
