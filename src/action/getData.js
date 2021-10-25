import { ADD_TOPPINGS } from './actionType';

export const addToppings = (toppings) => ({
    type: ADD_TOPPINGS,
    payload: toppings
});
