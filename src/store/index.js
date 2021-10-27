import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

function currencyReducer(
  state = {
    currentCurrency: "GBP",
    targetCurrency: "USD",
    // rate: 0
    rates: { USD: 1.3 },
    amount: 0,
    isSell: true,
    currencyList: {},
  },
  action
) {
  switch (action.type) {
    case "UPDATE_CURRENT_CURRENCY":
      return { ...state, currentCurrency: action.payload };
    case "UPDATE_TARGET_CURRENCY":
      return { ...state, targetCurrency: action.payload };
    case "UPDATE_RATE":
      return { ...state, rates: action.payload };
    case "UPDATE_AMOUNT":
      if (action.payload.fromCurrent) {
        return { ...state, amount: action.payload.amount };
      } else {
        return { ...state, amount: action.payload.amount / state.rates[state.targetCurrency] };
      }
    case "UPDATE_SELL_OR_BUY":
      return { ...state, isSell: !state.isSell };
    case "UPDATE_CURRENCY_LIST":
      return { ...state, currencyList: action.payload };
    default:
      return state;
  }
}

export function ConfigureStore(initialState) {
  let composeEnhancer;
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } else {
    composeEnhancer = compose;
  }

  const store = createStore(
    createRootReducer(history, { currencyReducer }),
    initialState,
    composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  store.asyncReducers = {};

  return store;
}

export const store = ConfigureStore();

if (module.hot) {
  module.hot.accept("./reducers", () => {
    const reducers = require("./reducers").default;
    store.replaceReducer(reducers(store.asyncReducers));
  });
}
