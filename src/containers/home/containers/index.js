import React, { useEffect, useState } from "react";
import { Container, Wrapper, Title, Rate, Button } from "../styles";
import SellAccount from "../../sellAccount/containers";
import ChangeAccountBtn from "../../changeAccountBtn/containers";
import BuyAccount from "../../buyAccount/containers";
import SubmitPopup from "../../submitPopup/containers";
import { MdShowChart } from "react-icons/md";
import Api from "../../../api";

const Index = () => {
  const [currency, updateCurrency] = useState({
    buyOrSell: ["Sell"],
    sell: ["£", "GBP"],
    buy: ["$", "USD"],
    buyCurrencyRate: [],
  });

  // Get rate by current currency
  useEffect(() => {    
    const interval = setInterval(() => {
      async function fetchData() {
        const response = await Api.getRateByCurrency();
        const GBP_rate = (1 / response.rates.GBP).toFixed(4);

        updateCurrency({
          buyOrSell: ["Sell"],
          sell: ["£", "GBP"],
          buy: ["$", "USD"],
          buyCurrencyRate: [GBP_rate],
        });
      }

      fetchData();
    }, 10000);
  }, [currency.buyCurrencyRate]);

  return (
    <Container>
      <SubmitPopup />
      <Wrapper>
        <Title>
          {currency.buyOrSell} {currency.sell[1]}
        </Title>
        <Rate>
          <MdShowChart />
          {currency.sell[0]}1 = {currency.buy[0]}
          {currency.buyCurrencyRate}
        </Rate>
      </Wrapper>

      <SellAccount currency={currency.sell[1]} />

      <ChangeAccountBtn />

      <BuyAccount currency={currency.buy[1]} />

      <Button>
        {currency.buyOrSell} {currency.sell[1]} for {currency.buy[1]}
      </Button>
    </Container>
  );
};

export default Index;
