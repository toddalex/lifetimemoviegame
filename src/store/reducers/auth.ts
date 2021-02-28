import * as actionTypes from '../actionTypes';
import { ValidationState } from '../../models'

const initialState: ValidationState = {
  username: {
    isValid: false,
    helperText: '',
  },
  password: {
    isValid: false,
    helperText: '',
  },
  confirmationCode: {
    isValid: false,
    helperText: '',
  },
  isDisabled: true,
  isLoading: true,
};

const updateObject = (oldObject: ValidationState, updatedProperties: {}) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

const updateValidation = (state = initialState, action: actionTypes.AuthActionTypes) => {
  const updatedFormElement = {
    isValid: action.isValid,
    helperText: action.helperText
  };
  const updatedState: ValidationState = updateObject(state, {
    [action.name]: updatedFormElement
  });
  return updatedState;
};

const authReducer = (state = initialState, action: actionTypes.AuthActionTypes): ValidationState => {
  switch (action.type) {
    case actionTypes.UPDATE_VALIDATION: return updateValidation(state, action)
    default: return state
  };
};

export default authReducer;