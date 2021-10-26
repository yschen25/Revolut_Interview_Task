import { UPDATE_RATE } from "./actionType";

export const updateRate = (currency) => ({
  type: UPDATE_RATE,
  payload: currency,
});
