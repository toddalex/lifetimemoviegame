import store from '../store';
import * as actions from '../store/actions';
import { 
  AuthError, 
  ErrorMessage,
  InputName
 } from '../models';

export const authErrorHandler = (error: AuthError): void => {
  
  const resetInput = (input: InputName) => {
    setTimeout(
      () => store.dispatch(actions.updateValidation(input, true, '')), 
      3000
    );
  };

  switch (error.code) {
    case ErrorMessage.IncorrectPassword : 
      store.dispatch(actions.updateValidation(InputName.Password, false, 'Incorrect password.'));
      resetInput(InputName.Password);
      break;
    case ErrorMessage.UsernameExists : 
      store.dispatch(actions.updateValidation(InputName.Username, false, 'User already exists.'));
      resetInput(InputName.Username);
      break;
    case ErrorMessage.NoUser :
      store.dispatch(actions.updateValidation(InputName.Username, false, 'User not found.'));
      resetInput(InputName.Username);
      break;
    case ErrorMessage.InvalidCode :
      store.dispatch(actions.updateValidation(InputName.ConfirmationCode, false, 'Invalid code.'));
      resetInput(InputName.ConfirmationCode);
      break;
  };
};