import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Mask, Wrapper, Title, Rate, Button } from "./style";
import { BuyWrapper, SellWrapper } from "../account/style";
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
import { currencies } from "currencies.json";
import Api from "../../api";

const Index = ({
  currentCurrency,
  targetCurrency,
  rate,
  amount,
  isSell,
  dispatchUpdateAmountFromCurrentState,
  dispatchUpdateAmountFromTargetState,
  dispatchUpdateRateState,
  dispatchUpdateSellOrBuyState,
}) => {
  const currentBalance = 33396.42;
  const targetBalance = 0.13;
  const [isDisplay, updateDisplay] = useState(false);

  // Get rate by current
  // useEffect(() => {
  //   // const interval = setInterval(() => {
  //   async function fetchData() {
  //     const response = await Api.getRateByCurrency(currentCurrency);
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

  const onSubmit = (e) => {
    if (!amount) {
      return;
    }

    e.stopPropagation();
    updateDisplay(true);
  };

  const closePopup = () => {
    updateDisplay(false);
  };

  const currentAmountStr = amount;
  const targetAmountStr = amount * rate;

  const currentSymbol = currencies.filter(
    ({ code }) => code === currentCurrency
  )[0].symbol;

  const targetSymbol = currencies.filter(
    ({ code }) => code === targetCurrency
  )[0].symbol;

  return (
    <Container onClick={closePopup}>
      <Wrapper>
        <Title>
          {isSell ? "Sell" : "Buy"} {currentCurrency}
        </Title>
        <Rate>
          <MdShowChart />
          {currentSymbol}1 = {targetSymbol}
          {rate}
        </Rate>
      </Wrapper>

      <SellWrapper>
        <AmountInput
          isMe={true}
          currency={currentCurrency}
          isSell={isSell}
          amount={currentAmountStr}
          balance={currentBalance}
          onAmountChange={dispatchUpdateAmountFromCurrentState}
        />
      </SellWrapper>

      <BuyWrapper>
        <AmountInput
          isMe={false}
          currency={targetCurrency}
          isSell={!isSell}
          amount={targetAmountStr}
          balance={targetBalance}
          onAmountChange={dispatchUpdateAmountFromTargetState}
        />
      </BuyWrapper>

      <ChangeAccountBtn onClick={toggleBuyOrSell} isSell={isSell} />

      <Button onClick={onSubmit}>
        {isSell ? "Sell" : "Buy"} {currentCurrency} for {targetCurrency}
      </Button>

      <Mask display={isDisplay} />
      <SubmitPopup isSell={isSell} display={isDisplay} />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateRateState: (rate) => {
    dispatch(updateRate(rate));
  },
  dispatchUpdateAmountFromCurrentState: (amount) => {
    dispatch(updateAmountFromCurrent(amount));
  },
  dispatchUpdateAmountFromTargetState: (amount) => {
    dispatch(updateAmountFromTarget(amount));
  },
  dispatchUpdateSellOrBuyState: () => {
    dispatch(updateSellOrBuy());
  },
});

const mapStateToProps = (state) => ({
  currentCurrency: state.currencyReducer.currentCurrency,
  targetCurrency: state.currencyReducer.targetCurrency,
  rate: state.currencyReducer.rate,
  amount: state.currencyReducer.amount,
  isSell: state.currencyReducer.isSell,
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
