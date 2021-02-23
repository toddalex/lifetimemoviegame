import { Auth } from 'aws-amplify';

import { 
  SignInAuth, 
  SignUpAuth,
  ConfirmSignupAuth, 
  ForgotPasswordAuth,
  ForgotPasswordSubmitAuth,
  ResendConfirmationCode,
} from '../models';

export const signIn: SignInAuth = async ({ username, password }, setUser)=> {
  try {
    const user = await Auth.signIn(username, password)
    const userInfo = { username: user.email, ...user.attributes }
    setUser(userInfo)
  } catch (err) {
    console.log('error signing up..', err)
  }
};

export const signUp: SignUpAuth =  async ({ username, password }, updateFormType) => {
  console.log(username)
  try {
    console.log(username)
    await Auth.signUp({
      username, password
    })
    console.log('sign up success!')
    updateFormType('confirmSignUp')
  } catch (err) {
    console.log('error signing up..', err)
  }
};

export const confirmSignUp: ConfirmSignupAuth = async ({ username, confirmationCode }, updateFormType) => {
  try {
    await Auth.confirmSignUp(username, confirmationCode)
    updateFormType('signIn')
  } catch (err) {
    console.log('error signing up..', err)
  }
};

export const forgotPassword: ForgotPasswordAuth = async ({ username }, updateFormType) => {
  try {
    await Auth.forgotPassword(username)
    updateFormType('forgotPasswordSubmit')
  } catch (err) {
    console.log('error submitting email to reset password...', err)
  }
};

export const forgotPasswordSubmit: ForgotPasswordSubmitAuth = async ({ username, confirmationCode, password }, updateFormType) => {
try {
  await Auth.forgotPasswordSubmit(username, confirmationCode, password)
  updateFormType('signIn')
  } catch (err) {
    console.log('error updating password... :', err)
  }
};

export const resendConfirmationCode: ResendConfirmationCode = async({ username }) => {
  try{
    await Auth.resendSignUp(username)
  } catch (err) {
    console.log('error resending confirmation code...', err)
  }
};
