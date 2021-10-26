import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  Wrapper,
  Currency,
  Input,
  Balance,
  Money,
  Notice,
} from "./style";

const AmountInput = ({
  currency,
  isSell,
  balance,
  amount,
  onAmountChange,
}) => {
  const [localAmount, updateMoney] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const onChange = (e) => {
    let inputText = e.target.value;
    let reg = /^\d*(\.\d{0,3})?$/;
    if (inputText.match(reg)) {
      const updatedAmount = parseFloat(inputText);
      updateMoney(updatedAmount);
      onAmountChange(updatedAmount);
    }
  };

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  useEffect(() => {
    if (!isFocus) {
      updateMoney(amount);
    }
  }, [amount]);

  const balanceStr = parseFloat(balance).toLocaleString();

  let isExceed = isSell && localAmount > parseFloat(balance);
  let amountStr = !localAmount ? null : localAmount.toFixed(2);

  return (
    <>
      <Wrapper isExceed={isExceed}>
        <Input
          type="number"
          isExceed={isExceed}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="0"
          value={amountStr || ""}
        />
        <Currency>
          {currency} <IoIosArrowDown />
        </Currency>
        <Balance>Balance: {balanceStr}</Balance>
        <Money />
        <Notice isExceed={isExceed}>exceeds balance</Notice>
      </Wrapper>
    </>
  );
};

export default AmountInput;
