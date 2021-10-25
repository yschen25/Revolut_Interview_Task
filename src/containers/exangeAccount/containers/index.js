import React, { useEffect, useState } from "react";
import { Currency, Input, Balance, Money } from "../styles";
import { IoIosArrowDown } from "react-icons/io";
import Api from "../../../api";

const CurrentAccount = () => {

  const [currency, updateCurrency] = useState("USD");

  const [money, updateMoney] = useState(parseFloat(0.13).toLocaleString());

  const [transferMoney, updateTransferMoney] = useState(0);

  return (
    <>
      <Input>
        <Currency>
          {currency} <IoIosArrowDown />
        </Currency>
        <Balance>Balance: {money}</Balance>
        <Money>{transferMoney}</Money>
      </Input>
    </>
  );
};

export default CurrentAccount;
