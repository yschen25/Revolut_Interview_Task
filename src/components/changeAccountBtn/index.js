import React from "react";
import { Button } from "./style";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const ChangeAccountBtn = ({ isSell, onClick }) => {
  
  let symbol = <AiOutlineArrowDown />;
  if (!isSell) {
    symbol = <AiOutlineArrowUp />;
  }

  return (
    <Button data-testid="changeCurrency" onClick={onClick}>
      {symbol}
    </Button>
  );
};

export default ChangeAccountBtn;
