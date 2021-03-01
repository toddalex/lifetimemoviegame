import * as actionTypes from '../actionTypes';
import { ValidationState } from '../../models'

const initialState: ValidationState = {
  username: {
    isValid: true,
    helperText: '',
  },
  password: {
    isValid: true,
    helperText: '',
  },
  confirmationCode: {
    isValid: true,
    helperText: '',
  },
  isLoading: false,
};

const updateObject = (oldObject: ValidationState, updatedProperties: {}) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

const updateValidation = (state = initialState, action: actionTypes.UpdateValidation) => {
  const updatedFormElement = {
    isValid: action.isValid,
    helperText: action.helperText
  };
  const updatedState: ValidationState = updateObject(state, {
    [action.name]: updatedFormElement
  });
  return updatedState;
};

const setLoading = (state = initialState, action: actionTypes.SetLoading) => {
  const updatedState = updateObject(state, {
    isLoading: !state.isLoading
  });
  return updatedState;
};

const authReducer = (state = initialState, action: actionTypes.AuthActionTypes): ValidationState => {
  switch (action.type) {
    case actionTypes.UPDATE_VALIDATION: return updateValidation(state, action)
    case actionTypes.SET_LOADING: return setLoading(state, action)
    default: return state
  };
};

export default authReducer;