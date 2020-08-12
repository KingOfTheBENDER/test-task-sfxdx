import { State, Action } from '../../redux/reducer/index';
import { GET_CURRENT_COIN_REQUEST, GET_CURRENT_COIN_SUCCESS, GET_CURRENT_COIN_FAIL } from './action';

const initialState: State = {fetching: false, data: null, err: null};

export const getCurrentCoin = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case GET_CURRENT_COIN_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null
      }
    case GET_CURRENT_COIN_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null
      }
    case GET_CURRENT_COIN_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err
      }
    default:
      return state;      
  }
};