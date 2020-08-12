import { State, Action } from '../../redux/reducer/index';
import { GET_COIN_LIST_REQUEST, GET_COIN_LIST_SUCCESS, GET_COIN_LIST_FAIL } from './action';

const initialState: State = {fetching: false, data: null, err: null};

export const getCoinList = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case GET_COIN_LIST_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null
      }
    case GET_COIN_LIST_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null
      }
    case GET_COIN_LIST_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err
      }
    default:
      return state;      
  }
};