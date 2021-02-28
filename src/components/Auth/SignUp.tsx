import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { styles } from './Form';
import { 
  UpdateFormState, 
  SignUpAuth, 
  UpdateFormType,
  InputName,
  InputLabel,
  ButtonType 
} from '../../models';

interface SignUpProps {
  updateFormState: UpdateFormState;
  signUp: SignUpAuth;
  updateFormType: UpdateFormType;
};

const SignUp: React.FC<SignUpProps> = ({ 
  updateFormState, 
  signUp,
  updateFormType 
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
          onClick={() => updateFormType('signIn')}
        >Sign In</span>
      </p>
    </>
  );
};
    
export default SignUp;