import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Container from '../UI/Container';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ConfirmSignUp from './ConfirmSignUp';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordSubmit from './ForgotPasswordSubmit';
import { AuthFormState, User } from '../../models';
import {
  forgotPassword,
  forgotPasswordSubmit,
  resendConfirmationCode,
} from '../../utils';
import { AuthActionTypes } from 'src/constants';
import * as actions from '../../store/actions';


const mapStateToProps = (state: {auth: AuthFormState}) => ({
  user: state.auth.user,
  username: state.auth.username,
  password: state.auth.password,
  confirmationCode: state.auth.confirmationCode,
  formType: state.auth.formType
});

const mapDispatchToProps = (dispatch: (func: AuthActionTypes)=> void) => ({
  updateUser: (payload: User) => dispatch(actions.updateUser(payload)),
  updateFormType: (formType: string) => dispatch(actions.updateFormType(formType)),
  updateField: (name: string, value: string) => dispatch(actions.updateField(name, value)),
  signIn: (name: string, password: string) =>  dispatch(actions.signIn(name, password)),
  signUp: (username: string, password: string) => dispatch(actions.signUp(username, password)),
  confirmSignUp: (username: string, confirmationCode: string) => dispatch(actions.signUp(username, confirmationCode))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type AuthFormProps = ConnectedProps<typeof connector>;

const Form: React.FC<AuthFormProps> = ({ 
  user,
  username,
  password,
  confirmationCode,
  formType,
  updateFormType,
  updateField,
  signIn,
  signUp,
  confirmSignUp
}) => {
  const updateForm: React.FormEventHandler = (e: React.FormEvent<Element>) => {
    const target = e.target as HTMLInputElement;
    updateField(target.name, target.value);
  };
  const renderForm = (): JSX.Element | null => {
    const form: AuthFormState = {
      user,
      username,
      password,
      confirmationCode
    };
    switch(formType) {
      case 'signUp':
        return (
          <SignUp
            signUp={() => signUp(username, password)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            updateFormType = {updateFormType}
          />
        )
      case 'confirmSignUp':
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(username, confirmationCode)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            resendConfirmationCode={() => resendConfirmationCode(form)}
          />
        )
      case 'signIn':
        return (
          <SignIn
            signIn={()=> signIn(username, password)}
            updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
            updateFormType={updateFormType}
          />
        )
      case 'forgotPassword':
        return (
          <ForgotPassword
          forgotPassword={() => forgotPassword(form, updateFormType)}
          updateFormState={(e: React.FormEvent<Element>) => updateForm(e)}
          updateFormType={updateFormType}
          />
        )
      case 'forgotPasswordSubmit':
        return (
          <ForgotPasswordSubmit
            forgotPasswordSubmit={
              () => forgotPasswordSubmit(form, updateFormType)}
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

export const styles: {
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

export default connector(Form);