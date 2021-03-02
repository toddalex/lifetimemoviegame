import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { 
  UpdateFormState, 
  ForgotPasswordSubmitAuth,
  InputName,
  InputLabel,
  ButtonType
 } from '../../models';

interface ForgotPasswordSubmitProps {
  updateFormState: UpdateFormState;
  forgotPasswordSubmit: ForgotPasswordSubmitAuth;
  clearValidation: () => void;
};

const ForgotPasswordSubmit: React.FC<ForgotPasswordSubmitProps> =({ 
  updateFormState, 
  forgotPasswordSubmit,
}) => {
  return (
    <>
      <Input
        name={InputName.ConfirmationCode}
        label={InputLabel.ConfirmationCode}
        updateFormState={updateFormState}
      />
      <Input
        name={InputName.Password}
        label={InputLabel.Password}
        type='password'
        updateFormState={updateFormState}
      />
      <Button onClick={forgotPasswordSubmit} title={ButtonType.ForgotPasswordSubmit} />
    </>
  );
};

export default ForgotPasswordSubmit;