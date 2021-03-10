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
 
const clearValidation = (state = initialState, action: actionTypes.ClearValidation) => {
  const defaultState: ValidationState = {
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
  const updatedState = updateObject(state, defaultState);
  return updatedState;
};

const setLoading = (state = initialState, action: actionTypes.SetLoading) => {
  const updatedState = updateObject(state, {
    isLoading: !state.isLoading
  });
  return updatedState;
};

const validationReducer = (state = initialState, action: actionTypes.AuthActionTypes): ValidationState => {
  switch (action.type) {
    case actionTypes.UPDATE_VALIDATION: return updateValidation(state, action)
    case actionTypes.SET_LOADING: return setLoading(state, action)
    case actionTypes.CLEAR_VALIDATION: return clearValidation(state, action)
    default: return state
  };
};

export default validationReducer;