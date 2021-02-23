import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { styles } from './Form';
import { UpdateFormState, ConfirmSignupAuth, ResendConfirmationCode } from '../../models';

interface ConfirmSignUpProps {
  updateFormState: UpdateFormState;
  confirmSignUp: ConfirmSignupAuth;
  resendConfirmationCode: ResendConfirmationCode;
}

const ConfirmSignUp: React.FC<ConfirmSignUpProps> = ({
  updateFormState,
  confirmSignUp,
  resendConfirmationCode
}) => {
  return (
    <>
      <Input
        name='confirmationCode'
        label='Confirmation Code'
        type='confirmationCode'
        updateFormState={updateFormState}
      />
      <Button onClick={confirmSignUp} title="Confirm Sign Up" />
      <p style={styles.toggleForm}>
        <span
          style={styles.anchor}
          // @ts-ignore
          onClick={resendConfirmationCode}
        >Resend Confirmation Code</span>
      </p>
    </>
  );
};

export default ConfirmSignUp;