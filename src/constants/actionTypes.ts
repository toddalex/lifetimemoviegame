import { User } from '../models/auth';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_FORM_TYPE = 'UPDATE_FORM_TYPE';
export const UPDATE_FIELD = 'UPDATE_FIELD'
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const CONFIRM_SIGN_UP = 'CONFIRM_SIGN_UP';

export interface UpdateUser {
  type: typeof UPDATE_USER
  payload: User | null
};

export interface UpdateFormType {
  type: typeof UPDATE_FORM_TYPE
  formType: string
};

export interface UpdateField {
  type: typeof UPDATE_FIELD
  name: string
  value: string
}

export interface ToggleButton {
  type: typeof TOGGLE_BUTTON
};

export interface SignIn {
  type: typeof SIGN_IN
  username: string
  password: string
};

export interface SignUp {
  type: typeof SIGN_UP
  username: string
  password: string
}

export interface ConfirmSignUp {
  type: typeof CONFIRM_SIGN_UP
  username: string
  confirmationCode: string
}

export type AuthActionTypes = 
UpdateUser |
UpdateFormType |
UpdateField |
SignIn |
SignUp |
ConfirmSignUp