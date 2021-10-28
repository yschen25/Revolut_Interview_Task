import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import GlobalStyle from "../../src/styles/global-style";
import { store } from "../../src/store";
import App from "../../src/components/app";
import api from "../../src/api";
import fakeCurrencyRateData from "./fake_currency_rate_data";
import fakeCurrencyList from "./fake_currency_list_data";

const sleep = s => new Promise((resolve) => {
    setTimeout(() => resolve(null), s);
})

// Mock API
jest.mock('../../src/api')
const mockedGetRateByCurrency = api.getRateByCurrency as jest.Mock
mockedGetRateByCurrency.mockResolvedValue(fakeCurrencyRateData);
const mockedGetCurrencyList = api.getCurrencyList as jest.Mock
mockedGetCurrencyList.mockResolvedValue(fakeCurrencyList);

describe("<Index />", () => {
  test("Render without crash", async () => {
    const { getByTestId, queryAllByTestId } = render(
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    );
    expect(getByTestId("index")).toBeInTheDocument();

    // Should get the exchange rate from API
    await sleep(100);
    expect(mockedGetRateByCurrency).toHaveBeenCalledTimes(1)

    // Should change target account input amount when changing current account input
    await fireEvent.change(getByTestId("sell-input"), {
      target: { value: "10" },
    });

    expect((getByTestId("buy-input") as HTMLInputElement).value).toBe("+13.74");
    expect((getByTestId("sell-input") as HTMLInputElement).value).toBe("-10");

    // Should change current account input amount when changing target account input
    await fireEvent.change(getByTestId("buy-input"), {
      target: { value: "0.13" },
    });

    expect((getByTestId("sell-input") as HTMLInputElement).value).toBe("-0.09");
    expect((getByTestId("buy-input") as HTMLInputElement).value).toBe("+0.13");

    // Should allow user to change account to sell or buy
    await fireEvent.click(getByTestId("changeCurrency"));

    await fireEvent.change(getByTestId("sell-input"), {
      target: { value: "10" },
    });

    expect((getByTestId("buy-input") as HTMLInputElement).value).toBe("-13.74");
    expect((getByTestId("sell-input") as HTMLInputElement).value).toBe("+10");

    await fireEvent.change(getByTestId("buy-input"), {
      target: { value: "0.13" },
    });

    expect((getByTestId("sell-input") as HTMLInputElement).value).toBe("+0.09");
    expect((getByTestId("buy-input") as HTMLInputElement).value).toBe("-0.13");

    // Should allow user to change current currency
    await fireEvent.click(getByTestId("link-to-currency-tab-for-sell-input"));
    expect(getByTestId("currency-list")).toBeInTheDocument();

    await sleep(100);
    expect(mockedGetCurrencyList).toHaveBeenCalledTimes(1);

    // Should back to the previos page when clicking arrow
    await fireEvent.click(getByTestId("back-to-index"));

    // Should allow user to change target currency
    await fireEvent.click(getByTestId("link-to-currency-tab-for-buy-input"));
    expect(getByTestId("currency-list")).toBeInTheDocument();

    // Should change the target currency when choosing the specfic currency
    await sleep(100);
    expect(mockedGetCurrencyList).toHaveBeenCalledTimes(1);

    await fireEvent.change(getByTestId("find-currency"), {
      target: { value: "j" },
    });

    expect(queryAllByTestId("currency-list-item")).toHaveLength(7);

    await fireEvent.change(getByTestId("find-currency"), {
      target: { value: "EUR" },
    });
    await fireEvent.click(getByTestId("currency-list-item"));
    expect((getByTestId("buy-input") as HTMLInputElement).value).toBe("-0.11");

    // Should show the popup when clicking the submit button
    await fireEvent.click(getByTestId("submit-request"));
    expect(getByTestId("exchange-text").textContent).toBe("£0.11 to €0.09");
  });
});
