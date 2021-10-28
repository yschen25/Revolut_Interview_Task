import * as React from 'react';
import { connect } from 'react-redux';
import { BsCheckCircle } from 'react-icons/bs';
import {
    Container, Line, Desc, ExchangeText, Button, iconStyle
} from './style';
import { findCurrencySymbol } from '../../utility';

const SubmitPopup = ({
    currentCurrency,
    targetCurrency,
    isSell,
    isDisplay,
    amount,
    rate,
}) => {
    
    let buyAmount = amount.toFixed(2);
    let sellAmount = (amount * rate).toFixed(2);

    if (isSell) {
        sellAmount = amount.toFixed(2);
        buyAmount = (amount * rate).toFixed(2);
    }

    const currentSymbol = findCurrencySymbol(currentCurrency);
    const targetSymbol = findCurrencySymbol(targetCurrency);

    return (
        <Container isDisplay={isDisplay}>
            <Line />
            <BsCheckCircle style={iconStyle}/>
            <Desc>You exchanged</Desc>
            <ExchangeText data-testid="exchange-text">
                {currentSymbol}
                {sellAmount}
                {' '}
                to
                {' '}
                {targetSymbol}
                {buyAmount}
            </ExchangeText>
            <Button>Set up limit order</Button>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    currentCurrency: state.currencyReducer.currentCurrency,
    targetCurrency: state.currencyReducer.targetCurrency,
    amount: state.currencyReducer.amount,
    rate: state.currencyReducer.rates[state.currencyReducer.targetCurrency],
});

export default connect(mapStateToProps)(SubmitPopup);
