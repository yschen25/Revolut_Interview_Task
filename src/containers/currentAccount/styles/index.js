import styled from "styled-components";

const Input = styled.div`
  display: flex;
  position: absolute;
  top: 150px;
  left: 10px;
  width: 95%;
  background: #fff;
  height: 65px;
  padding: 15px 15px 15px 5px;
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
`;

const Money = styled.p`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.2rem;
  color: grey;
`;

export { Currency, Input, Balance, Money };
