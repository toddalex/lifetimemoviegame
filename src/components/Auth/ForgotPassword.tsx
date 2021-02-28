import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { styles } from './Form';
import { 
  UpdateFormState, 
  ForgotPasswordAuth, 
  UpdateFormType,
  InputName,
  InputLabel,
  ButtonType, 
} from '../../models';

interface ForgotPasswordProps {
  updateFormState: UpdateFormState;
  forgotPassword: ForgotPasswordAuth;
  updateFormType: UpdateFormType;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  updateFormState,
  forgotPassword,
  updateFormType
}) => {
  return (
    <>
      <Input
        name={InputName.Username}
        label={InputLabel.Email}
        updateFormState={updateFormState}
      />
      <Button onClick={forgotPassword} title={ButtonType.ForgotPassword} />
      <p style={styles.toggleForm}>
        <span
          style={styles.anchor}
          onClick={() => updateFormType('signIn')}
        >Go Back</span>
      </p>
    </>
  );
};

export default ForgotPassword;