import { UPDATE_AMOUNT } from "./actionType";

export const updateAmount = (amount) => ({
  type: UPDATE_AMOUNT,
  payload: amount,
});
