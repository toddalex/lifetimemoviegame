export const UPDATE_VALIDATION = 'UPDATE_VALIDATION';
export const CLEAR_VALIDATION = 'CLEAR_VALIDATION';
export const SET_LOADING = 'SET_LOADING';

export type IsValidIdentifier = 'username' | 'password' | 'confirmationCode';

export interface UpdateValidation {
  type: typeof UPDATE_VALIDATION;
  name: IsValidIdentifier;
  isValid: boolean;
  helperText: string;
};

export interface ClearValidation {
  type: typeof CLEAR_VALIDATION;
};

export interface SetLoading {
  type: typeof SET_LOADING;
};

export type AuthActionTypes = 
UpdateValidation |
SetLoading |
ClearValidation