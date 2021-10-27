import { UPDATE_RATE } from "./actionType";

export const updateRates = (currency) => ({
  type: UPDATE_RATE,
  payload: currency,
});
