import { UPDATE_AMOUNT } from "./actionType";

export const updateAmountFromCurrent = (amount) => ({
  type: UPDATE_AMOUNT,
  payload: {
    fromCurrent: true,
    amount,
  }
});

export const updateAmountFromTarget = (amount) => ({
  type: UPDATE_AMOUNT,
  payload: {
    fromCurrent: false,
    amount,
  },
});
