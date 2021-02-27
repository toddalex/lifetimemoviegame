import { SetStateAction, Dispatch } from "react";

export interface User {
  email: string;
  email_verified: boolean;
  sub: string;
  username: string;
};

export interface AuthFormState {
  user?: User | null
  username: string;
  password: string;
  confirmationCode: string;
  formType?: string;
};

export interface ButtonState {
  disabled: boolean;
};

export type ProfileStateType = User | null;

export type UpdateFormType = (formType: string) => void;

export type SetUser = ({}: User) => void;

export type UpdateFormState = { (value: React.ChangeEvent<HTMLInputElement>): void; (arg0: React.FormEvent): void };

export type OnChangeAuth = ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;

export type SignInAuth = ({ username, password }: {
  username: string;
  password: string;
}) => void;

export type SignUpAuth = ({ username, password }: {
  username: string;
  password: string;
}) => void;

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