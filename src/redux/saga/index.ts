import { all } from 'redux-saga/effects';
import { watchGetCoinList } from '../../screens/MainScreen/saga';
import { watchGetCurrentCoin } from '../../screens/DetailScreen/saga';

function* dataSaga(){
  yield all([watchGetCoinList(),watchGetCurrentCoin()])
}

export default dataSaga;