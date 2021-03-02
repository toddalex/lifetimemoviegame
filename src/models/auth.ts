import { SetStateAction, Dispatch } from "react";
import { FormType } from "./enums";

export interface AuthFormState {
  username: string;
  password: string;
  confirmationCode: string;
};

export interface ValidationState {
  username: {
    isValid: boolean;
    helperText: string;
  };
  password: {
    isValid: boolean;
    helperText: string;
  };
  confirmationCode: {
    isValid: boolean;
    helperText: string;
  };
  isLoading: boolean;
};

export interface AuthError {
  code: string
  message: string
  name: string
};

export interface User {
  email: string;
};

export type ProfileStateType = User | null;

export type UpdateFormType = Dispatch<SetStateAction<FormType>>;

export type SetUser = Dispatch<React.SetStateAction<ProfileStateType>>

export type UpdateFormState = { (value: React.ChangeEvent<HTMLInputElement>): void; (arg0: React.FormEvent): void };

export type SignInAuth = ({ username, password }: {
  username: string;
  password: string;
}, setUser: SetUser) => Promise<void>;

export type SignUpAuth = ({ username, password }: {
  username: string;
  password: string;
  confirmationCode: string;
}, updateFormType: UpdateFormType) => Promise<void>;

export type ConfirmSignupAuth = ({ username, confirmationCode }: {
  username: string;
  password: string;
  confirmationCode: string;
}, updateFormType: UpdateFormType) => Promise<void>;

export type ForgotPasswordAuth = ({ username }: {
  username: string;
  password: string;
  confirmationCode: string;
}, updateFormType: UpdateFormType) => Promise<void>;

export type ForgotPasswordSubmitAuth = ({ username, confirmationCode, password }: {
  username: string;
  password: string;
  confirmationCode: string;
}, updateFormType: UpdateFormType) => Promise<void>;

export type ResendConfirmationCode = ({ username }: {
  username: string;
}) => Promise<void>;
