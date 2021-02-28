import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { UpdateFormState, ValidationState } from '../../models';
import { AuthActionTypes, IsValidIdentifier } from '../../store/actionTypes';
import * as actions from '../../store/actions';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  updateFormState: UpdateFormState;
};

const mapStateToProps = (state: {auth: ValidationState}) => ({
  username: state.auth.username,
  password: state.auth.password,
  confirmationCode: state.auth.confirmationCode,
});

const mapDispatchToProps = (dispatch: (func: AuthActionTypes) => void) => ({
  updateValidation: (
    name: IsValidIdentifier,
    isValid: boolean, 
    helperText: string
    ) => dispatch(actions.updateValidation(name, isValid, helperText))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type StateProps = InputProps & ConnectedProps<typeof connector>;

const Input: React.FC<StateProps> = ({
  name,
  label,
  type,
  updateFormState,
  username,
  password,
  confirmationCode,
  updateValidation
}) => {

  const validateEmail = (email: string): void => {
    const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    !email.match(emailFormat) 
      ? updateValidation('username', true, 'please enter a valid email')
      : updateValidation('username', false, '');
  };

  const validateConfirmationCode = (confirmationCode: string): void => {
    confirmationCode.length !== 6
      ? updateValidation('confirmationCode', true, 'please enter a 6-digit value')
      : updateValidation('confirmationCode', false, '');
  };

  const validatePassword = (password: string): void => {
    password.length < 8 
      ? updateValidation('password', true, 'minimum 8 characters')
      : updateValidation('password', false, '');
  };

  const renderInput = (): JSX.Element => {
    switch(name){
      case 'username':
        return(
          <TextField
            name={name}
            label={label}
            onChange={e => {e.persist();updateFormState(e);validateEmail(e.target.value);}}
            error={username.isValid}
            helperText={username.helperText}
          />
        )
      case 'confirmationCode':
        return(
          <TextField
            name={name}
            label={label}
            onChange={e => {e.persist();updateFormState(e);validateConfirmationCode(e.target.value);}}
            error={confirmationCode.isValid}
            helperText={confirmationCode.helperText}
          />
        )
      case 'password':
        return(
          <TextField
            name={name}
            label={label}
            type={type}
            onChange={e => {e.persist();updateFormState(e);validatePassword(e.target.value);}}
            error={password.isValid}
            helperText={password.helperText}
          />
        )
      default: 
        return(
          <TextField
            name={name}
            label={label}
            type={type}
            onChange={e => {e.persist();updateFormState(e);}}
          />
        )
    };
  };
  
  return (
    <>
      {renderInput()}
    </>
  );
};

export default connector(Input);