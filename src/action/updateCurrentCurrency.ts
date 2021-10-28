import { UPDATE_CURRENT_CURRENCY } from "./actionType";

export const updateCurrentCurrency = (currency) => ({
  type: UPDATE_CURRENT_CURRENCY,
  payload: currency,
});
