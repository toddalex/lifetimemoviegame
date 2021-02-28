import store from '../store';
import * as actions from '../store/actions';
import { AuthError } from '../models';

enum ErrorMessage {
  IncorrectPassword = 'NotAuthorizedException',
  NoUser = 'UserNotFoundException',
  InvalidCode = 'CodeMismatchException',
  UsernameExists = 'UsernameExistsException'
}

export const authErrorHandler = (error: AuthError): void => {
  switch (error.code) {
    case ErrorMessage.IncorrectPassword : 
      store.dispatch(actions.updateValidation('password', true, 'Incorrect password.'))
      break;
    case ErrorMessage.UsernameExists : 
      store.dispatch(actions.updateValidation('username', true, 'User already exists.'))
      break;
    case ErrorMessage.NoUser :
      store.dispatch(actions.updateValidation('username', true, 'User not found.'))
      break;
    case ErrorMessage.InvalidCode :
      store.dispatch(actions.updateValidation('confirmationCode', true, 'Invalid code.'))
      break;
  };
};