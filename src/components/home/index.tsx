import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MdShowChart } from 'react-icons/md';
import {
    Container, Mask, Wrapper, Title, Rate, Button
} from './style';
import { BuyWrapper, SellWrapper } from '../account/style';
import AmountInput from '../account';
import ChangeAccountBtn from '../changeAccountBtn';
import SubmitPopup from '../submitPopup';
import { updateSellOrBuy } from '../../action/updateSellOrBuy';
import { updateRates } from '../../action/updateRate';
import {
    updateAmountFromCurrent,
    updateAmountFromTarget,
} from '../../action/updateAmount';
import { findCurrencySymbol } from '../../utility';
import Api from '../../api';

const Index = ({
    currentBalance,
    targetBalance,
    currentCurrency,
    targetCurrency,
    rates,
    amount,
    isSell,
    isExceed,
    dispatchUpdateAmountFromCurrentState,
    dispatchUpdateAmountFromTargetState,
    dispatchUpdateRateState,
    dispatchUpdateSellOrBuyState
}) => {
    const [isDisplay, updateDisplay] = useState(false);

    async function fetchData() {
        const response = await Api.getRateByCurrency(currentCurrency);
        const { rates } = response;
        dispatchUpdateRateState(rates);
    }

    // Get rate by curreny
    useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 10 * 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    // Change account to sell or buy
    const toggleBuyOrSell = () => {
        dispatchUpdateSellOrBuyState();
    };

    // Submit exchange request
    const onSubmit = (e) => {
        if (!amount || isExceed) {
            return;
        }

        e.stopPropagation();
        updateDisplay(true);
    };

    const closePopup = () => {
        updateDisplay(false);
    };

    const rate = rates[targetCurrency];
    const currentAmountStr = amount;
    const targetAmountStr = amount * rate;

    const currentSymbol = findCurrencySymbol(currentCurrency);
    const targetSymbol = findCurrencySymbol(targetCurrency);

    return (
        <Container data-testid="index" onClick={closePopup}>
            <Wrapper>
                <Title>
                    {isSell ? 'Sell' : 'Buy'}
                    {' '}
                    {currentCurrency}
                </Title>
                <Rate>
                    <MdShowChart />
                    {currentSymbol}
                    1 = {' '}
                    {targetSymbol}
                    {rate}
                </Rate>
            </Wrapper>

            <SellWrapper>
                <AmountInput
                    data_testid="sell-input"
                    data_test_id_for_link="link-to-currency-tab-for-sell-input"
                    isCurrent
                    currency={currentCurrency}
                    isSell={isSell}
                    amount={currentAmountStr}
                    balance={currentBalance}
                    onAmountChange={dispatchUpdateAmountFromCurrentState}
                />
            </SellWrapper>

            <BuyWrapper>
                <AmountInput
                    data_testid="buy-input"
                    data_test_id_for_link="link-to-currency-tab-for-buy-input"
                    isCurrent={false}
                    currency={targetCurrency}
                    isSell={!isSell}
                    amount={targetAmountStr}
                    balance={targetBalance}
                    onAmountChange={dispatchUpdateAmountFromTargetState}
                />
            </BuyWrapper>

            <ChangeAccountBtn onClick={toggleBuyOrSell} isSell={isSell} />

            <Button data-testid="submit-request" onClick={onSubmit}>
                {isSell ? 'Sell' : 'Buy'}
                {' '}
                {currentCurrency}
                {' '}
                for
                {' '}
                {targetCurrency}
            </Button>

            <Mask isDisplay={isDisplay} />
            <SubmitPopup isSell={isSell} isDisplay={isDisplay} />
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchUpdateRateState: (rates) => {
        dispatch(updateRates(rates));
    },
    dispatchUpdateAmountFromCurrentState: (amount) => {
        dispatch(updateAmountFromCurrent(amount));
    },
    dispatchUpdateAmountFromTargetState: (amount) => {
        dispatch(updateAmountFromTarget(amount));
    },
    dispatchUpdateSellOrBuyState: () => {
        dispatch(updateSellOrBuy());
    },
});

const mapStateToProps = (state) => ({
    currentBalance: state.currencyReducer.currentBalance,
    targetBalance: state.currencyReducer.targetBalance,
    currentCurrency: state.currencyReducer.currentCurrency,
    targetCurrency: state.currencyReducer.targetCurrency,
    rates: state.currencyReducer.rates,
    amount: state.currencyReducer.amount,
    isSell: state.currencyReducer.isSell,
    isExceed: state.currencyReducer.isExceed
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
