import axios from "axios";
import { CURRENCY_LIST_REQUEST, CURRENCY_LIST_RECEIVED, CURRENCY_LIST_ERROR } from './constants';

function requestCurrency() {
  return {
    type: CURRENCY_LIST_REQUEST,
  };
}
function receiveCurrency(json) {
  return {
    type: CURRENCY_LIST_RECEIVED,
    result: json.data,
  };
}
function errorCurrency(error) {
  return {
    type: CURRENCY_LIST_ERROR,
    error
  };
}
export default function fetchCurrency() {
  return dispatch => {
    dispatch(requestCurrency());
    return axios.get('https://api.exchangeratesapi.io/latest')
      .then((result) => {
        dispatch(receiveCurrency(result));
        return result;
      }).catch((error) => {
        dispatch(errorCurrency(error));
      });
  };
}
