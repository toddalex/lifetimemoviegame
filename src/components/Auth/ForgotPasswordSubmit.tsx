import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { UpdateFormState, ForgotPasswordSubmitAuth } from '../../models';

interface ForgotPasswordSubmitProps {
  updateFormState: UpdateFormState;
  forgotPasswordSubmit: ForgotPasswordSubmitAuth;
};

const ForgotPasswordSubmit: React.FC<ForgotPasswordSubmitProps> =({ 
  updateFormState, 
  forgotPasswordSubmit
}) => {
  return (
    <>
      <Input
        name='confirmationCode'
        label='Confirmation code'
        updateFormState={updateFormState}
      />
      <Input
        name='password'
        label='New password'
        type='password'
        updateFormState={updateFormState}
      />
      <Button onClick={forgotPasswordSubmit} title="Save new password" />
    </>
  );
};

export default ForgotPasswordSubmit;