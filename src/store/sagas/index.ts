import * as Effects from 'redux-saga/effects';
import { signInSaga, signUpSaga, confirmSignUpSaga } from './auth';
import * as actionTypes from '../../constants';

const takeEvery: any = Effects.takeEvery;

export function* watchAuth() {
  yield takeEvery(actionTypes.SIGN_IN, signInSaga)
  yield takeEvery(actionTypes.SIGN_UP, signUpSaga)
  yield takeEvery(actionTypes.CONFIRM_SIGN_UP, confirmSignUpSaga)
}