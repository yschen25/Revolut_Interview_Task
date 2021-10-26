import React from "react";
import { connect } from "react-redux";
import { Container, Line, Desc, ExchangeText, Button } from "./style";

const SubmitPopup = ({ isSell, display, amount, rate }) => {

  let sellAmount = null;
  let buyAmount = null;

  if (isSell) {
    sellAmount = amount;
    buyAmount = (amount * rate).toFixed(2);
  } else {
    buyAmount = amount;
    sellAmount = (amount * rate).toFixed(2);
  }

  return (
    <Container isDisplay={display}>
      <Line />
      <Desc>You exchanged</Desc>
      <ExchangeText>
        {sellAmount} to {buyAmount}
      </ExchangeText>
      <Button>Set up limit order</Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  amount: state.currencyReducer.amount,
  rate: state.currencyReducer.rate,
});

export default connect(mapStateToProps)(SubmitPopup);
