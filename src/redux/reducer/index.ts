import { combineReducers } from 'redux';
import { getCoinList } from '../../screens/MainScreen/reducer';
import { getCurrentCoin } from '../../screens/DetailScreen/reducer';

export interface State {
  fetching:boolean;
  data:any;
  err:any;
}

export interface Action {
  type: string;
  payload: any;
}

const combinedReducer= combineReducers({getCoinList,getCurrentCoin});
export default combinedReducer