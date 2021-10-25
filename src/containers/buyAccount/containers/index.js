import React, { useEffect, useState } from "react";
import { Currency, Input, Balance, Money, Notice } from "../styles";
import { IoIosArrowDown } from "react-icons/io";
import Api from "../../../api";

const BuyAccount = (props) => {

  const [money, updateMoney] = useState(parseFloat(0.13).toLocaleString());
  const [transferMoney, updateTransferMoney] = useState(0);

  return (
    <>
      <Input>
        <Currency>
          {props.currency}<IoIosArrowDown />
        </Currency>
        <Balance>Balance: {money}</Balance>
        <Money>{transferMoney}</Money>
        <Notice>exceeds balance</Notice>
      </Input>
    </>
  );
};

export default BuyAccount;
