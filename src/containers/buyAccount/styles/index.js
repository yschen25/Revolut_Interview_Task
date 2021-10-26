import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  left: 10px;
  width: 95%;
  background: #fff;
  height: 65px;
  padding: 15px 15px 15px 5px;
`;

const BuyWrapper = styled(Wrapper)`
  top: 235px;
`;

const SellWrapper = styled(Wrapper)`
  top: 150px;
`;

const Input = styled.input`
  position: absolute;
  right: 0;
  height: 100%;
  width: 80%;
  top: 0;
  padding: 0px 20px 20px 5px;
  text-align: right;
  font-size: 1.1rem;
  border: none;
`;

const Currency = styled.p`
  color: #000;
  position: absolute;
  top: 10px;
`;

const Balance = styled.p`
  color: grey;
  position: absolute;
  bottom: 10px;
  font-size: 0%.9rem;
`;

const Money = styled.p`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.2rem;
  color: grey;
`;

const Notice = styled.span`
  position: absolute;
  right: 15px;
  bottom: 10px;
  font-size: 0.9rem;
  color: #db3946;
`;

export { BuyWrapper, SellWrapper, Currency, Input, Balance, Money, Notice };
