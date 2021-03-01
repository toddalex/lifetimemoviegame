import { Auth } from 'aws-amplify';
import store from '../store';
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
import * as actions from '../store/actions';

export const signIn: SignInAuth = async ({ username, password }, setUser)=> {
  store.dispatch(actions.setLoading());
  try {
    const user = await Auth.signIn(username, password);
    store.dispatch(actions.setLoading());
    const userInfo = { username: user.email, ...user.attributes }
    setUser(userInfo)
  } catch (err) {
    console.log('error signing up..', err)
    authErrorHandler(err);
    store.dispatch(actions.setLoading());
  };
};

export const signUp: SignUpAuth =  async ({ username, password }, updateFormType) => {
  store.dispatch(actions.setLoading());
  try {
    await Auth.signUp({ username, password });
    store.dispatch(actions.setLoading());
    console.log('sign up success!')
    updateFormType(FormType.ConfirmSignUp)
  } catch (err) {
    console.log('error signing up..', err);
    authErrorHandler(err);
    store.dispatch(actions.setLoading());
  };
};

export const confirmSignUp: ConfirmSignupAuth = async ({ username, confirmationCode }, updateFormType) => {
  store.dispatch(actions.setLoading());
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    store.dispatch(actions.setLoading());
    updateFormType(FormType.SignIn);
  } catch (err) {
    console.log('error signing up..', err);
    authErrorHandler(err);
    store.dispatch(actions.setLoading());
  };
};

export const forgotPassword: ForgotPasswordAuth = async ({ username }, updateFormType) => {
  store.dispatch(actions.setLoading());
  try {
    await Auth.forgotPassword(username);
    store.dispatch(actions.setLoading());
    updateFormType(FormType.ForgotPasswordSubmit);
  } catch (err) {
    console.log('error submitting email to reset password...', err);
    authErrorHandler(err);
    store.dispatch(actions.setLoading());
  };
};

export const forgotPasswordSubmit: ForgotPasswordSubmitAuth = async ({ username, confirmationCode, password }, updateFormType) => {
  store.dispatch(actions.setLoading());
  try {
    await Auth.forgotPasswordSubmit(username, confirmationCode, password);
    store.dispatch(actions.setLoading());
    updateFormType(FormType.SignIn);
    } catch (err) {
      console.log('error updating password... :', err);
      authErrorHandler(err);
      store.dispatch(actions.setLoading());
    };
};

export const resendConfirmationCode: ResendConfirmationCode = async({ username }) => {
  store.dispatch(actions.setLoading());
  try{
    await Auth.resendSignUp(username);
    store.dispatch(actions.setLoading());
  } catch (err) {
    console.log('error resending confirmation code...', err);
    authErrorHandler(err);
    store.dispatch(actions.setLoading());
  };
};
