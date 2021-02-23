import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { UpdateFormState } from '../../models';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  updateFormState: UpdateFormState;
};

interface InputState {
  error: boolean;
  helperText: null | string;
};

const initialState: InputState = {
  error: false,
  helperText: null
};

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  updateFormState,
}) => {
  const [state, setState] = useState(initialState);

  const validateEmail = (email: string): void => {
    const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (email === null || email === '' || !email.match(emailFormat)) {
      const newstate: InputState = {
        ...state, 
          error: true,
          helperText: 'please enter valid email'
      };
      setState(newstate);
    } else {
      const newstate: InputState = {
        ...state, 
          error: false,
          helperText: null
      };
      setState(newstate);
    };
  };

  const validateConfirmationCode = (confirmationCode: string): void => {
    if (confirmationCode.length < 6 || confirmationCode.length > 6) {
      const newstate: InputState = {
        ...state, 
          error: true,
          helperText: 'please enter a 6-digit value'
      };
      setState(newstate);
    } else {
      const newstate: InputState = {
        ...state, 
          error: false,
          helperText: null
      };
      setState(newstate);
    };
  };

  const validatePassword = (password: string): void => {
    if (password.length < 8) {
      const newstate: InputState = {
        ...state, 
          error: true,
          helperText: 'minimum 8 characters long'
      };
      setState(newstate);
    } else {
      const newstate: InputState = {
        ...state, 
          error: false,
          helperText: null
      };
      setState(newstate);
    };
  };

  const renderInput = (): JSX.Element => {
    switch(name){
      case 'username':
        return(
          <TextField
            name={name}
            label={label}
            onChange={e => {e.persist();updateFormState(e);validateEmail(e.target.value);}}
            error={state.error}
            helperText={state.helperText}
          />
        )
      case 'confirmationCode':
        return(
          <TextField
            name={name}
            label={label}
            onChange={e => {e.persist();updateFormState(e);validateConfirmationCode(e.target.value);}}
            error={state.error}
            helperText={state.helperText}
          />
        )
      case 'password':
        return(
          <TextField
            name={name}
            label={label}
            type={type}
            onChange={e => {e.persist();updateFormState(e);validatePassword(e.target.value);}}
            error={state.error}
            helperText={state.helperText}
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

export default Input;