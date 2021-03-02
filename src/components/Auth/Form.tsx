import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ConfirmSignUp from './ConfirmSignUp';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordSubmit from './ForgotPasswordSubmit';
import Container from '../UI/Container';
import * as actions from '../../store/actions';
import { AuthActionTypes } from 'src/store/actionTypes';
import { 
  AuthFormState, 
  SetUser,
  FormType,
 } from '../../models';
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

interface Props {
  setUser: SetUser;
};

const Form: React.FC<FormProps> = ({ setUser, clearvalidation }) => {
  const [formType, updateFormType] = useState(FormType.SignIn);
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
      case FormType.SignUp:
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            updateFormType = {updateFormType}
            clearValidation = {clearvalidation}
          />
        )
      case FormType.ConfirmSignUp:
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            resendConfirmationCode={() => resendConfirmationCode(formState)}
            clearValidation = {clearvalidation}
          />
        )
      case FormType.SignIn:
        return (
          <SignIn
            signIn={() => signIn(formState, setUser)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            updateFormType={updateFormType}
            clearValidation = {clearvalidation}
          />
        )
      case FormType.ForgotPassword:
        return (
          <ForgotPassword
          forgotPassword={() => forgotPassword(formState, updateFormType)}
          updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
          updateFormType={updateFormType}
          clearValidation = {clearvalidation}
          />
        )
      case FormType.ForgotPasswordSubmit:
        return (
          <ForgotPasswordSubmit
            forgotPasswordSubmit={
              () => forgotPasswordSubmit(formState, updateFormType)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            clearValidation = {clearvalidation}
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

const mapDispatchToProps = (dispatch: (func: AuthActionTypes) => void) => ({
  clearvalidation: () => dispatch(actions.clearvalidation())
});

const connector = connect(null, mapDispatchToProps);

type FormProps = Props & ConnectedProps<typeof connector>;

export default connector(Form);

export const styles: {
  toggleForm: React.CSSProperties;
  anchor: React.CSSProperties;
} = {
  toggleForm: {
    fontSize: '11px',
    margin: '3px 0',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  anchor: {
    color: '#006bfc',
    cursor: 'pointer',
  }
};
