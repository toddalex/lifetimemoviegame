import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import OAuth from '../Auth/OAuth';
import { styles } from './Form';
import { 
  UpdateFormState, 
  SignUpAuth, 
  UpdateFormType,
  InputName,
  InputLabel,
  ButtonType,
  FormType, 
} from '../../models';

interface SignUpProps {
  updateFormState: UpdateFormState;
  signUp: SignUpAuth;
  updateFormType: UpdateFormType;
  clearValidation: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ 
  updateFormState, 
  signUp,
  updateFormType,
  clearValidation 
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
        type="password"
        updateFormState={updateFormState}
     />
      <Button onClick={signUp} title={ButtonType.SignUp} />
      <p style={styles.toggleForm}>
        Already have an account? <span
          style={styles.anchor}
          onClick={() => {
            updateFormType(FormType.SignIn);
            clearValidation();
          }}
        >Sign In</span>
      </p>
      <OAuth />
    </>
  );
};
    
export default SignUp;