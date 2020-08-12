export const GET_CURRENT_COIN_REQUEST = "GET_CURRENT_COIN_REQUEST"; 
export const GET_CURRENT_COIN_SUCCESS = "GET_CURRENT_COIN_SUCCESS";
export const GET_CURRENT_COIN_FAIL = "GET_CURRENT_COIN_FAIL";

export const getCurrentCoinRequest = (id: any) => {
  return {type: GET_CURRENT_COIN_REQUEST, payload: {id}};
};
export const getCurrentCoinSuccess = (data: any) => {
  return {type: GET_CURRENT_COIN_SUCCESS, payload: {data}};
};
export const getCurrentCoinFail = (err: any) => {
  return {type: GET_CURRENT_COIN_FAIL, payload: {err}};
};