import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_COIN_LIST_REQUEST, getCoinListSuccess, getCoinListFail } from './action';
import { Action } from '../../redux/reducer';
import { getCoinList } from '../../networkers/api';

export function* watchGetCoinList() {
  yield takeEvery(GET_COIN_LIST_REQUEST, handleGetCoinList);
}

function* handleGetCoinList(action: Action) {
  const res = yield call(getCoinList);
  if(!res.error){
    yield put(getCoinListSuccess(res));
  } else {
    yield put(getCoinListFail(res.error))
  }
}