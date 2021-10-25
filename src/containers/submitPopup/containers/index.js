import React, { useEffect, useState } from "react";
import { Container, ExchangeText, Button } from "../styles";
import Api from "../../../api";

const SubmitPopup = () => {
  return (
    <Container>
      <p>You exchanged</p>
      <ExchangeText> xxxx to yyy </ExchangeText>
      <Button>Set up limit order</Button>
    </Container>
  );
};

export default SubmitPopup;
