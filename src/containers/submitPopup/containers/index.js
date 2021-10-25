import React, { useEffect, useState } from "react";
import { Container, Line, Desc, ExchangeText, Button } from "../styles";
import Api from "../../../api";

const SubmitPopup = () => {

  const display = true;

  return (
    <Container display={display}>
      <Line />
      <Desc>You exchanged</Desc>
      <ExchangeText> xxxx to yyy </ExchangeText>
      <Button>Set up limit order</Button>
    </Container>
  );
};

export default SubmitPopup;
