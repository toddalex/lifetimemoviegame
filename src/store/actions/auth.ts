import * as actionTypes from '../../constants';
import { User, AuthFormState } from '../../models'

export const toggleButton = (): actionTypes.ToggleButton => {
  return {
    type: actionTypes.TOGGLE_BUTTON
  };
};

export const updateFormType = (formType: string): actionTypes.UpdateFormType => {
  return {
    type: actionTypes.UPDATE_FORM_TYPE,
    formType,
  };
};

export const updateUser = (payload: User | null): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.UPDATE_USER,
    payload,
  };
};

export const updateField = (name: string, value: string): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.UPDATE_FIELD,
    name,
    value,
  }
}

export const signIn = (username: string, password: string): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.SIGN_IN,
    username,
    password,
  };
};

export const signUp = (username: string, password: string): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.SIGN_UP,
    username,
    password,
  };
};
