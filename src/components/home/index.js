import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Wrapper, Title, Rate, Button } from "./style";
import {
  BuyWrapper,
  SellWrapper,
} from "../account/style";
import AmountInput from "../account";
import ChangeAccountBtn from "../changeAccountBtn";
import SubmitPopup from "../submitPopup";
import { MdShowChart } from "react-icons/md";
import { updateSellOrBuy } from "../../action/updateSellOrBuy";
import { updateRate } from "../../action/updateRate";
import {
  updateAmountFromCurrent,
  updateAmountFromTarget,
} from "../../action/updateAmount";
import Api from "../../api";

const Index = ({
  amount,
  isSell,
  rate,
  dispatchUpdateAmountFromCurrentState,
  dispatchUpdateAmountFromTargetState,
  dispatchUpdateRateState,
  dispatchUpdateSellOrBuyState
}) => {
  const currentBalance = 33396.42;
  const targetBalance = 0.13;
  const [isDisplay, updateDisplay] = useState(false);
  const [currency, updateCurrency] = useState({
    sell: ["£", "GBP"],
    buy: ["$", "USD"],
  });

  // Get rate by current currency
  // useEffect(() => {
  //   // const interval = setInterval(() => {
  //   async function fetchData() {
  //     const response = await Api.getRateByCurrency("GBP");
  //     const rate = response.rates.USD.toFixed(4);

  //     console.log(rate);
  //     dispatchUpdateRateState(rate);
  //   }

  //   fetchData();
  //   // }, 10000000000);
  // }, []);

  const toggleBuyOrSell = () => {
    dispatchUpdateSellOrBuyState();
  };

  const onClick = (e) => {
    e.stopPropagation();
    updateDisplay(true);
  };

  const closePopup = () => {
    updateDisplay(false);
  };

  const currentAmountStr = amount;
  const targetAmountStr = amount * rate;

  return (
    <Container onClick={closePopup}>
      <Wrapper>
        <Title>
          {isSell ? "Sell" : "Buy"} {currency.sell[1]}
        </Title>
        <Rate>
          <MdShowChart />
          {currency.sell[0]}1 = {currency.buy[0]}
          {rate}
        </Rate>
      </Wrapper>

      <SellWrapper>
        <AmountInput
          currency={currency.sell[1]}
          isSell={isSell}
          amount={currentAmountStr}
          balance={currentBalance}
          onAmountChange={dispatchUpdateAmountFromCurrentState}
        />
      </SellWrapper>

      <BuyWrapper>
        <AmountInput
          currency={currency.buy[1]}
          isSell={!isSell}
          amount={targetAmountStr}
          balance={targetBalance}
          onAmountChange={dispatchUpdateAmountFromTargetState}
        />
      </BuyWrapper>

      <ChangeAccountBtn onClick={toggleBuyOrSell} isSell={isSell} />

      <Button onClick={onClick}>
        {isSell ? "Sell" : "Buy"} {currency.sell[1]} for {currency.buy[1]}
      </Button>

      <SubmitPopup isSell={isSell} display={isDisplay} />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateAmountFromCurrentState: (amount) => {
    dispatch(updateAmountFromCurrent(amount));
  },
  dispatchUpdateAmountFromTargetState: (amount) => {
    dispatch(updateAmountFromTarget(amount));
  },
  dispatchUpdateSellOrBuyState: () => {
    dispatch(updateSellOrBuy());
  },
  dispatchUpdateRateState: (currency) => {
    dispatch(updateRate(currency));
  }
});

const mapStateToProps = (state) => ({
  amount: state.currencyReducer.amount,
  isSell: state.currencyReducer.isSell,
  rate: state.currencyReducer.rate,
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
