import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  padding-left: 15px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const SellWrapper = styled.div`
  top: 150px;
  display: flex;
  position: absolute;
  left: 10px;
  right: 10px;
  width: 95%;
  height: 80px;
`;

const BuyWrapper = styled.div`
  top: 245px;
  display: flex;
  position: absolute;
  left: 10px;
  right: 10px;
  width: 95%;
  height: 80px;
`;

const Input = styled.input`
  position: absolute;
  right: 0;
  height: 100%;
  width: 80%;
  top: 0;
  padding: 0px 15px 30px 5px;
  text-align: right;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
`;

const Currency = styled.p`
  color: #000;
  position: absolute;
  top: 10px;
  font-size: 1.2rem;
`;

const Balance = styled.p`
  color: grey;
  position: absolute;
  bottom: 10px;
  font-size: 0.9rem;
`;

const Money = styled.p`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.2rem;
  color: grey;
`;

const Notice = styled.span`
  display: ${(props) => (props.isExceed ? 'block' : 'none')};
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 0.9rem;
  color: #db3946;
`;

const iconStyle = {
    fontSize: '1.2rem',
    position: 'absolute',
    top: '0',
    right: '-24px',
};

export {
    Wrapper,
    BuyWrapper,
    SellWrapper,
    Currency,
    Input,
    Balance,
    Money,
    Notice,
    iconStyle
};
