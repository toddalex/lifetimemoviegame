export const UPDATE_VALIDATION = 'UPDATE_VALIDATION';

export type IsValidIdentifier = 'username' | 'password' | 'confirmationCode';

interface UpdateValidation {
  type: typeof UPDATE_VALIDATION;
  name: IsValidIdentifier;
  isValid: boolean;
  helperText: string;
};

export type AuthActionTypes = 
UpdateValidation