import { UPDATE_CURRENCY_LIST } from "./actionType";

export const updateCurrencyList = (list) => ({
  type: UPDATE_CURRENCY_LIST,
  payload: list,
});
