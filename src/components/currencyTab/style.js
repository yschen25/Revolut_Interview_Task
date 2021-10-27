import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 45px;
  position: relative;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100vw;
  height: 45px;
  border: none;
  padding-left: 50px;
  caret-color: #1e7bc7;
  font-size: 1.3rem;
  position: absolute;
  top: 0;
`;

const List = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 90%;
  padding: 0 10px;
`;

const CurrencyWrapper = styled.div`
  margin: 10px;
`;

const CurrencyTitle = styled.div`
  width: 100%;
`;

const CurrencySubTitle = styled.div`
  width: 100%;
  color: #9d9d9d;
  margin-top: 7px;
  font-size: 0.8rem;
`;

const linkStyle = {
    display: 'block',
    width: '55px',
    height: '45px',
};

const iconStyle = {
    fontSize: '1.6em',
    position: 'absolute',
    color: '#000',
    top: '50%',
    left: '15px',
    transform: 'translate(0, -50%)',
    zIndex: '2'
};

export {
    Container,
    Wrapper,
    Input,
    List,
    CurrencyWrapper,
    CurrencyTitle,
    CurrencySubTitle,
    linkStyle,
    iconStyle
};
