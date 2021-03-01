import store from '../store';
import * as actions from '../store/actions';
import { 
  AuthError,
  ErrorCode, 
  ErrorMessage,
  InputName
 } from '../models';

export const authErrorHandler = (error: AuthError): void => {
  
  const resetInput = (input: InputName, message: ErrorMessage) => {
    setTimeout(
      () => store.dispatch(actions.updateValidation(input, true, message)), 
      1000
    );
  };

  switch (error.code) {
    case ErrorCode.IncorrectPassword : 
      store.dispatch(actions.updateValidation(InputName.Password, false, ErrorMessage.IncorrectPassword));
      resetInput(InputName.Password, ErrorMessage.IncorrectPassword);
      break;
    case ErrorCode.UsernameExists : 
      store.dispatch(actions.updateValidation(InputName.Username, false, ErrorMessage.UsernameExists));
      resetInput(InputName.Username, ErrorMessage.UsernameExists);
      break;
    case ErrorCode.NoUser :
      store.dispatch(actions.updateValidation(InputName.Username, false, ErrorMessage.NoUser));
      resetInput(InputName.Username, ErrorMessage.NoUser);
      break;
    case ErrorCode.InvalidCode :
      store.dispatch(actions.updateValidation(InputName.ConfirmationCode, false, ErrorMessage.InvalidCode));
      resetInput(InputName.ConfirmationCode, ErrorMessage.InvalidCode);
      break;
  };
};