export const GET_COIN_LIST_REQUEST = "GET_COIN_LIST_REQUEST"; 
export const GET_COIN_LIST_SUCCESS = "GET_COIN_LIST_SUCCESS";
export const GET_COIN_LIST_FAIL = "GET_COIN_LIST_FAIL";

export const getCoinListRequest = () => {
  return {type: GET_COIN_LIST_REQUEST};
};
export const getCoinListSuccess = (data: any) => {
  return {type: GET_COIN_LIST_SUCCESS, payload: {data}};
};
export const getCoinListFail = (err: any) => {
  return {type: GET_COIN_LIST_FAIL, payload: {err}};
};