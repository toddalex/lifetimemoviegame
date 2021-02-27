import * as Effects from 'redux-saga/effects';
import { signInSaga } from './auth';
import * as actionTypes from '../../constants';

const takeEvery: any = Effects.takeEvery;

export function* watchAuth() {
  yield takeEvery(actionTypes.SIGN_IN, signInSaga)
}