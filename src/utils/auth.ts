import { Auth } from 'aws-amplify';
import { authErrorHandler } from './authErrorHandler';
import { 
  SignInAuth, 
  SignUpAuth,
  ConfirmSignupAuth, 
  ForgotPasswordAuth,
  ForgotPasswordSubmitAuth,
  ResendConfirmationCode,
  FormType
} from '../models';

export const signIn: SignInAuth = async ({ username, password }, setUser)=> {
  try {
    const user = await Auth.signIn(username, password)
    const userInfo = { username: user.email, ...user.attributes }
    setUser(userInfo)
  } catch (err) {
    console.log('error signing up..', err)
    authErrorHandler(err);
  };
};

export const signUp: SignUpAuth =  async ({ username, password }, updateFormType) => {
  try {
    await Auth.signUp({ username, password });
    console.log('sign up success!')
    updateFormType(FormType.ConfirmSignUp)
  } catch (err) {
    console.log('error signing up..', err);
    authErrorHandler(err);
  };
};

export const confirmSignUp: ConfirmSignupAuth = async ({ username, confirmationCode }, updateFormType) => {
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    updateFormType(FormType.SignIn);
  } catch (err) {
    console.log('error signing up..', err);
    authErrorHandler(err);
  };
};

export const forgotPassword: ForgotPasswordAuth = async ({ username }, updateFormType) => {
  try {
    await Auth.forgotPassword(username);
    updateFormType(FormType.ForgotPasswordSubmit);
  } catch (err) {
    console.log('error submitting email to reset password...', err);
    authErrorHandler(err);
  };
};

export const forgotPasswordSubmit: ForgotPasswordSubmitAuth = async ({ username, confirmationCode, password }, updateFormType) => {
try {
  await Auth.forgotPasswordSubmit(username, confirmationCode, password);
  updateFormType(FormType.SignIn);
  } catch (err) {
    console.log('error updating password... :', err);
    authErrorHandler(err);
  };
};

export const resendConfirmationCode: ResendConfirmationCode = async({ username }) => {
  try{
    await Auth.resendSignUp(username);
  } catch (err) {
    console.log('error resending confirmation code...', err);
    authErrorHandler(err);
  };
};
