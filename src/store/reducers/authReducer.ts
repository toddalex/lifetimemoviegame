import * as actionTypes from '../../constants/actionTypes';
import { AuthFormState } from '../../models';

const initialState: AuthFormState = {
  user: null,
  username: '',
  password: '',
  confirmationCode: '',
  formType: 'signIn',
};

const updateUser = (state = initialState, action: actionTypes.UpdateUser): AuthFormState  => {
  return ({
    ...state,
    user: action.payload
  });
};

const updateFormType = (state = initialState, action: actionTypes.UpdateFormType): AuthFormState => {
  return({
    ...state,
    formType: action.formType
  });
};

const updateField = (state = initialState, action: actionTypes.UpdateField): AuthFormState => {
  return({
    ...state,
    [action.name]: action.value
  })
}

const authReducer = (state = initialState, action: actionTypes.AuthActionTypes): AuthFormState => {
  switch(action.type) {
    case actionTypes.UPDATE_USER: return updateUser(state, action);
    case actionTypes.UPDATE_FIELD: return updateField(state, action);
    case actionTypes.UPDATE_FORM_TYPE: return updateFormType(state, action);
    default: return state;
  };
};

export default authReducer;