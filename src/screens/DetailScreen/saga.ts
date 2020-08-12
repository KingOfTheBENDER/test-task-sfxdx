import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_CURRENT_COIN_REQUEST, getCurrentCoinSuccess, getCurrentCoinFail } from './action';
import { Action } from '../../redux/reducer';
import { getCurrentCoin } from '../../networkers/api';

export function* watchGetCurrentCoin() {
  yield takeEvery(GET_CURRENT_COIN_REQUEST, handleGetCurrentCoin);
}

function* handleGetCurrentCoin(action: Action) {
    const res = yield call(getCurrentCoin, action.payload);
    if(!res.error){
      yield put(getCurrentCoinSuccess(res));
    } else {
      yield put(getCurrentCoinFail(res.error));
    }
}