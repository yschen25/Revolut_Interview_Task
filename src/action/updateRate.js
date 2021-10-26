import { UPDATE_RATE } from "./actionType";

export const updateRate = (rate) => ({
  type: UPDATE_RATE,
  payload: rate,
});
