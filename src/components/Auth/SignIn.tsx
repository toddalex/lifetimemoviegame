import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { styles } from './Form';
import { UpdateFormState, SignInAuth, UpdateFormType } from '../../models';

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
        name='username'
        label='Email'
        updateFormState={updateFormState}
      />
      <Input
        name='password'
        label='Password'
        type='password'
        updateFormState={updateFormState}
      />
      <Button onClick={signIn} title="Sign In" />
      <p style={styles.toggleForm}>
        Need an account? <span
          style={styles.anchor}
          onClick={() => updateFormType('signUp')}
        >Sign Up</span>
      </p>
      <p style={{ ...styles.toggleForm, }}>
        Forget your password? <span
          style={styles.anchor}
          onClick={() => updateFormType('forgotPassword')}
        >Reset Password</span>
      </p>
    </>
  );
};
  
export default SignIn;