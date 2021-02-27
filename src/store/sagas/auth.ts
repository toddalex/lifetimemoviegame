import { put, call } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { signIn, signUp } from '../../utils'
import * as actions from '../actions';
import { SignIn, SignUp } from 'src/constants';

export function* signInSaga(payload: SignIn) {
  const { username, password} = payload;
  try {
    const userInfo = yield call(signIn, {username, password});
    yield put (actions.updateUser(userInfo));
  } catch (err) {
    console.log('error signing up..', err)
  }
}

export function* signUpSaga(payload: SignUp) {
  const { username, password} = payload;
  try {
    yield call([Auth, 'signUp'], { username, password });
    console.log('sign up success!')
    yield put (actions.updateFormType('confirmSignUp'));
  } catch (err) {
    console.log('error signing up..', err);
  }
}
