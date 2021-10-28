import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateisExceed } from '../../action/updateIsExceed';
import { IoIosArrowDown } from 'react-icons/io';
import {
    Wrapper,
    Currency,
    Input,
    Balance,
    Money,
    Notice,
    iconStyle,
} from './style';

const AmountInput = ({
    data_testid,
    data_test_id_for_link,
    isCurrent,
    currency,
    isSell,
    balance,
    amount,
    onAmountChange,
    dispatchUpdateIsExceedState
}) => {
    const [localAmount, updateMoney] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    const onChange = (e) => {
        let inputText = e.target.value;
        if (
            inputText.length > 0
      && (inputText[0] === '+' || inputText[0] === '-')
        ) {
            inputText = inputText.substring(1);
        }
        const reg = /^(\+|-)?\d*(\.\d{0,2})?$/;
        if (inputText.match(reg)) {
            const updatedAmount = inputText.length === 0 ? 0 : parseFloat(inputText);
            updateMoney(inputText);
            onAmountChange(updatedAmount);
        }
    };

    const onFocus = () => setIsFocus(true);
    const onBlur = () => setIsFocus(false);

    useEffect(() => {
        if (!isFocus) {
            const formated = '' + +amount.toFixed(2);
            if (formated === '0') {
                updateMoney(null)
            } else {
                updateMoney(formated);
            }
        }
    }, [amount]);

    const balanceStr = parseFloat(balance).toLocaleString();

    const isExceed = isSell && parseFloat(localAmount || '0') > parseFloat(balance);
    dispatchUpdateIsExceedState(isExceed);

    // Change input background color
    let color = '#ededed';
    if (isFocus) {
        color = '#dedede';
    }
    if (isExceed) {
        color = '#f7d1d7';
    }

    const sign = isSell ? '-' : '+';
    let localAmountStr = localAmount
        ? sign + +parseFloat(localAmount).toFixed(2)
        : '';
    if (isFocus) {
        localAmountStr = localAmount ? sign + localAmount : '';
    }

    return (
        <>
            <Wrapper style={{ background: color }}>
                <Input
                    data-testid={data_testid}
                    type="text"
                    pattern="\d*(\.\d{0,2})?"
                    style={{ background: color }}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder="0"
                    value={localAmountStr}
                />
                <Currency>
                    <Link
                        data-testid={data_test_id_for_link}
                        to={{ pathname: '/currency_tab', state: { isCurrent } }}
                    >
                        {currency}
                        {' '}
                        <IoIosArrowDown style={iconStyle} />
                    </Link>
                </Currency>
                <Balance>
                    Balance: {' '}
                    {balanceStr}
                </Balance>
                <Money />
                <Notice style={{ background: color }} isExceed={isExceed}>
                    exceeds balance
                </Notice>
            </Wrapper>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchUpdateIsExceedState: (boolean) => {
        dispatch(updateisExceed(boolean));
    }
});

export default connect(null, mapDispatchToProps)(AmountInput);
