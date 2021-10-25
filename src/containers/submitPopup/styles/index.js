import styled from "styled-components";

const Container = styled.div`
  // display: ${(props) => (props.display ? "flex" : "none")};
  display:none;
  flex-wrap: wrap;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  height: 40%;
  background: #fff;
  border-radius: 20px;
  z-index: 1;
`;

const Line = styled.p`
  width: 55px;
  height: 3px;
  border-radius: 3px;
  background: #dbd7d7;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 12px;
`;

const Desc = styled.p`
  margin: auto;
  position: absolute;
  bottom: 103px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const ExchangeText = styled.p`
  color: #009ae3;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 75px;
  font-weight: 600;
`;

const Button = styled.div`
  width: 85%;
  height: 40px;
  line-height: 20px;
  padding: 10px;
  margin: auto;
  text-align: center;
  background: #ccdcf3;
  border-radious: 6px;
  color: #009ae3;
  border-radius: 12px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export { Container, Line, Desc, ExchangeText, Button };
