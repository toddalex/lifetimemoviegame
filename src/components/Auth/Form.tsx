import React, { useState } from 'react';
import Container from '../UI/Container';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ConfirmSignUp from './ConfirmSignUp';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordSubmit from './ForgotPasswordSubmit';
import { AuthFormState, SetUser } from '../../models';
import {
  signIn,
  signUp,
  confirmSignUp,
  forgotPassword,
  forgotPasswordSubmit,
  resendConfirmationCode,
} from '../../utils';

const initialFormState: AuthFormState = {
  username: '', 
  password: '', 
  confirmationCode: '',
};

interface FormProps {
  setUser: SetUser;
}

const Form: React.FC<FormProps> = ({ setUser }) => {
  const [formType, updateFormType] = useState('signIn');
  const [formState, updateFormState] = useState(initialFormState);

  const updateForm: React.FormEventHandler = (e: React.FormEvent<Element>) => {
    const target = e.target as HTMLInputElement;
    const newFormState = {
      ...formState, [target.name]: target.value
    }
    updateFormState(newFormState);
  };

  const renderForm = (): JSX.Element | null => {
    switch(formType) {
      case 'signUp':
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            updateFormType = {updateFormType}
          />
        )
      case 'confirmSignUp':
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            resendConfirmationCode={() => resendConfirmationCode(formState)}
          />
        )
      case 'signIn':
        return (
          <SignIn
            signIn={() => signIn(formState, setUser)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            updateFormType={updateFormType}
          />
        )
      case 'forgotPassword':
        return (
          <ForgotPassword
          forgotPassword={() => forgotPassword(formState, updateFormType)}
          updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
          updateFormType={updateFormType}
          />
        )
      case 'forgotPasswordSubmit':
        return (
          <ForgotPasswordSubmit
            forgotPasswordSubmit={
              () => forgotPasswordSubmit(formState, updateFormType)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
          />
        )
      default:
        return null;
    };
  };

  return (
    <Container>
      {renderForm()}
    </Container>
  );
};

const styles: {
  toggleForm: React.CSSProperties;
  anchor: React.CSSProperties;
} = {
  toggleForm: {
    fontSize: '11px',
    padding: '0px 20px',
    marginBottom: 0,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  anchor: {
    color: '#006bfc',
    cursor: 'pointer'
  }
};

export { styles, Form as default };