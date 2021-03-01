import React from 'react';
import OAuth from '../Auth/OAuth';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { styles } from './Form';
import { 
  UpdateFormState, 
  SignInAuth, 
  UpdateFormType,
  InputName,
  InputLabel,
  ButtonType,
  FormType
} from '../../models';

interface SignInProps {
  updateFormState: UpdateFormState;
  signIn: SignInAuth;
  updateFormType: UpdateFormType;
};

const SignIn:React.FC<SignInProps> = ({  
  updateFormState,
  signIn,
  updateFormType, 
}) => {
  return (
    <>
      <Input
        name={InputName.Username}
        label={InputLabel.Email}
        updateFormState={updateFormState}
      />
      <Input
        name={InputName.Password}
        label={InputLabel.Password}
        type='password'
        updateFormState={updateFormState}
      />
      <Button onClick={signIn} title={ButtonType.SignIn} />
      <p style={styles.toggleForm}>
        Need an account? <span
          style={styles.anchor}
          onClick={() => updateFormType(FormType.SignUp)}
        >Sign Up</span>
      </p>
      <p style={{ ...styles.toggleForm, }}>
        Forget your password? <span
          style={styles.anchor}
          onClick={() => updateFormType(FormType.ForgotPassword)}
        >Reset Password</span>
      </p>
      <OAuth />
    </>
  );
};
  
export default SignIn;