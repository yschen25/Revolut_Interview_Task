import { UPDATE_TARGET_CURRENCY } from "./actionType";

export const updateTargetCurrency = (currency) => ({
  type: UPDATE_TARGET_CURRENCY,
  payload: currency,
});
