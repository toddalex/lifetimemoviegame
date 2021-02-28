import { put, call, StrictEffect } from 'redux-saga/effects';
import { signIn, signUp, confirmSignUp } from '../../utils'
import * as actions from '../actions';
import { ConfirmSignUp, SignIn, SignUp } from 'src/constants';


export function* signInSaga(payload: SignIn): Generator<StrictEffect> {
  const { username, password} = payload;
  try {
    const userInfo = yield call(signIn, {username, password});
    // @ts-ignore
    yield put (actions.updateUser(userInfo));
  } catch (err) {
    console.log('error signing up..', err)
  };
};

export function* signUpSaga(payload: SignUp): Generator<StrictEffect> {
  const { username, password} = payload;
  try {
    yield call(signUp, { username, password });
    yield put (actions.updateFormType('confirmSignUp'));
  } catch (err) {
    console.log('error signing up..', err);
  };
};

export function* confirmSignUpSaga(payload: ConfirmSignUp): Generator<StrictEffect> {
  const { username, confirmationCode} = payload;
  try {
    yield call(confirmSignUp, { username, confirmationCode });
    yield put (actions.updateFormType('signIn'));
  } catch (err) {
    console.log('error signing up..', err)
  };
};
