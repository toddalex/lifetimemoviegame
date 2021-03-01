import * as actionTypes from '../actionTypes';

export const updateValidation = (
  name: actionTypes.IsValidIdentifier,
  isValid: boolean,
  helperText: string,
  ): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.UPDATE_VALIDATION,
    name,
    isValid,
    helperText,
  };
};

export const setLoading = (): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.SET_LOADING
  };
};