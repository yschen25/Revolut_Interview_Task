import { currencies } from "currencies.json";

export const findCurrencySymbol = (currency) => {
  const filtered = currencies.filter(({ code }) => code === currency)
  if (filtered.length > 0) {
    return filtered[0].symbol;
  }

  return currency;
}
