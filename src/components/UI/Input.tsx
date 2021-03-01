import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { 
  UpdateFormState, 
  ValidationState,
  InputName
} from '../../models';
import { AuthActionTypes, IsValidIdentifier } from '../../store/actionTypes';
import * as actions from '../../store/actions';

interface Props {
  name: string;
  label: string;
  type?: string;
  updateFormState: UpdateFormState;
};

const Input: React.FC<InputProps> = ({
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
      ? updateValidation(InputName.Username, false, 'please enter a valid email')
      : updateValidation(InputName.Username, true, '');
  };

  const validateConfirmationCode = (confirmationCode: string): void => {
    confirmationCode.length !== 6
      ? updateValidation(InputName.ConfirmationCode, false, 'please enter a 6-digit value')
      : updateValidation(InputName.ConfirmationCode, true, '');
  };

  const validatePassword = (password: string): void => {
    password.length < 8 
      ? updateValidation(InputName.Password, false, 'minimum 8 characters')
      : updateValidation(InputName.Password, true, '');
  };

  const renderInput = (): JSX.Element => {
    switch(name){
      case InputName.Username :
        return(
          <TextField
            style={styles}
            name={name}
            label={label}
            onChange={e => {e.persist();updateFormState(e);validateEmail(e.target.value);}}
            error={!username.isValid}
            helperText={username.helperText}
          />
        )
      case InputName.ConfirmationCode :
        return(
          <TextField
            style={styles}
            name={name}
            label={label}
            onChange={e => {e.persist();updateFormState(e);validateConfirmationCode(e.target.value);}}
            error={!confirmationCode.isValid}
            helperText={confirmationCode.helperText}
          />
        )
      case InputName.Password :
        return(
          <TextField
            name={name}
            label={label}
            type={type}
            onChange={e => {e.persist();updateFormState(e);validatePassword(e.target.value);}}
            error={!password.isValid}
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

const mapStateToProps = (state: {
  auth: ValidationState
}) => ({
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

type InputProps = Props & ConnectedProps<typeof connector>;

export default connector(Input);

const styles: React.CSSProperties = {
  marginBottom: '5px',
};
