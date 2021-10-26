import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { updateAmount } from "../../../action/updateAmount";
import {
  SellWrapper,
  Currency,
  Input,
  Balance,
  Money,
  Notice,
} from "../../buyAccount/styles";

const SellAccount = ({ currency, dispatchUpdateAmountState }) => {
  const [balance, updateBalance] = useState(
    parseFloat(33396.42).toLocaleString()
  );

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

  // const amountStr = "-" + amount;
  const amountStr = "" + amount;

  return (
    <>
      <SellWrapper>
        <Input
          type="number"
          onChange={onChange}
          placeholder="0"
          value={amountStr}
        />
        <Currency>
          {currency} <IoIosArrowDown />
        </Currency>
        <Balance>Balance: {balance}</Balance>
        <Money />
        <Notice>exceeds balance</Notice>
      </SellWrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateAmountState: (amount) => {
    dispatch(updateAmount(amount));
  },
});

export default connect(null, mapDispatchToProps)(SellAccount);
