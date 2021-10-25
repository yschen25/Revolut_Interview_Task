import React, { useEffect, useState } from "react";
import { Container, Wrapper, Title, Rate, Button } from "../styles";
import CurrentAccount from "../../currentAccount/containers";
import ChangeAccountBtn from "../../changeAccountBtn/containers";
import ExangeAccount from "../../exangeAccount/containers";
import SubmitPopup from "../../submitPopup/containers";
import { MdShowChart } from "react-icons/md";
import Api from "../../../api";

const Index = () => {

  const [title, updateCurrency] = useState({
    buyOrSell: ["Sell"],
    currency: ["GBP"],
  });

  const [rate, updateRate] = useState({
    sellCurrencySymbol: ["£"],
    buyCurrencySymbol: ["$"],
    buyCurrencyRate: [1.34234],
  });

  const [submitBtnText, updateSubmitButton] = useState({
    buyOrSell: ["Sell"],
    sell: ["GBP"],
    buy: ["EUR"],
  });

  // Get rate by current currency
  useEffect(() => {
    async function fetchData() {
      const response = await Api.getRateByCurrency(title.Currency);
      console.log(response)
    }

    fetchData();

  }, []); 

  return (
    <Container>
      <SubmitPopup/>
      <Wrapper>
        <Title>
          {title.buyOrSell} {title.currency}
        </Title>
        <Rate>
          <MdShowChart />
          {rate.sellCurrencySymbol}1 = {rate.buyCurrencySymbol}
          {rate.buyCurrencyRate}
        </Rate>
      </Wrapper>

      <CurrentAccount />
      <ChangeAccountBtn />
      <ExangeAccount />

      <Button>
        {submitBtnText.buyOrSell} {submitBtnText.sell} for {submitBtnText.buy}
      </Button>
    </Container>
  );
};

export default Index;
