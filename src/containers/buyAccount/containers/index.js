import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BuyWrapper, Currency, Input, Balance, Money, Notice } from "../styles";
import { IoIosArrowDown } from "react-icons/io";

const BuyAccount = ({currency, exchangeRate}) => {
  const [balance, updateBalance] = useState(parseFloat(0.13).toLocaleString());
  const [amount, updateMoney] = useState();

  // Update money
  const onChange = (e) => {
    let inputText = e.target.value;
    let reg = /^\d+(\.\d{0,2})?$/;
    if (inputText.match(reg)) {
      const updatedAmount = parseFloat(inputText);
      updateMoney(updatedAmount);
      dispatchUpdateAmountState(updatedAmount);
    }
  };

  return (
    <>
      <BuyWrapper>
        <Input onChange={onChange} value={exchangeRate} />
        <Currency>
          {currency} <IoIosArrowDown />
        </Currency>
        <Balance>Balance: {balance}</Balance>
        <Money />
        <Notice>exceeds balance</Notice>
      </BuyWrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateAmountState: (amount) => {
    dispatch(updateAmount(amount));
  },
});

export default connect(null, mapDispatchToProps)(BuyAccount);
