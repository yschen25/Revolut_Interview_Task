import React, { useEffect, useState } from "react";
import { Currency, Input, Balance, Money, Notice } from "../styles";
import { IoIosArrowDown } from "react-icons/io";
import Api from "../../../api";

const SellAccount = (props) => {

  const [money, updateMoney] = useState(parseFloat(33396.42).toLocaleString());

  const [transferMoney, updateTransferMoney] = useState(0);

  return (
    <>
      <Input>
        <Currency>
          {props.currency} <IoIosArrowDown />
        </Currency>
        <Balance>Balance: {money}</Balance>
        <Money>{transferMoney}</Money>
        <Notice>exceeds balance</Notice>
      </Input>
    </>
  );
};

export default SellAccount;
