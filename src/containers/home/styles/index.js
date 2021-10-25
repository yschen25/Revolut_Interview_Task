import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: #f6f6f6;
`;

const Wrapper = styled.div`
  width: 100vw;
  position: absolute;
  left: 10px;
  top: 60px;
`;

const Title = styled.p`
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
`;

const Rate = styled.p`
  color: #009ae3;
  margin-top: 15px;
`;

const Button = styled.div`
  margin: auto;
  width: 95%;
  padding: 12px 25px;
  color: #fff;
  background-color: #0057e5;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  position: absolute;
  box-shadow: 1px 5px 5px #a2c7df;
  bottom: 30px;
`;

export { Container, Wrapper, Title, Rate, Button };
