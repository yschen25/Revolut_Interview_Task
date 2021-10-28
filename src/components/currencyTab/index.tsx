import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import * as _ from 'lodash';
import { updateCurrencyList } from '../../action/updateCurrencyList';
import { updateCurrentCurrency } from '../../action/updateCurrentCurrency';
import { updateTargetCurrency } from '../../action/updateTargetCurrency';
import {
    Container,
    Wrapper,
    Input,
    List,
    CurrencyWrapper,
    CurrencyTitle,
    CurrencySubTitle,
    linkStyle,
    iconStyle
} from './style';
import Api from '../../api';

type CurrencyTabState = {
    originalList: {[key: string]: string},
    searchList: {[key: string]: string},
    keyword: string | null,
}

const CurrencyTab = ({
    history: {
        location: {
            state: { isCurrent },
        },
    },
    currencyList,
    dispatchUpdateCurrentCurrencyState,
    dispatchUpdateTargetCurrencyState,
    dispatchUpdateCurrencyListState,
}) => {
    const [list, updateList] = useState<CurrencyTabState>({
        originalList: {},
        searchList: {},
        keyword: null,
    });

    useEffect(() => {
        async function fetchData() {
            let newCurrencyList = currencyList;

            // Check does it have cache
            if (_.isEmpty(newCurrencyList)) {
                newCurrencyList = await Api.getCurrencyList();
                dispatchUpdateCurrencyListState(newCurrencyList);
            }

            updateList((list) => doSearch({ ...list, originalList: newCurrencyList }));
        }

        fetchData();
    }, []);

    // Dynamic filter currency list by typing input value
    const doSearch = (list) => {
        const { keyword, originalList } = list;
        if (!keyword) {
            return { ...list, searchList: originalList };
        }
        const result = _.pickBy(originalList, (_value, key) => key.includes(keyword));

        return { ...list, searchList: result };
    };

    const onChange = (e) => {
        const keyword = e.target.value.toUpperCase();
        updateList(doSearch({ ...list, keyword }));
    };

    // Update current / target account's currency
    const history = useHistory();
    const onChooseCurrency = (currencyCode) => () => {
        if (isCurrent) {
            dispatchUpdateCurrentCurrencyState(currencyCode);
        } else {
            dispatchUpdateTargetCurrencyState(currencyCode);
        }

        history.push('/');
    };

    return (
        <Container>
            <Wrapper>
                <Link data-testid="back-to-index" style={linkStyle} to="/">
                    <AiOutlineArrowLeft style={iconStyle} />
                </Link>
                <Input data-testid="find-currency" onChange={onChange} />
            </Wrapper>
            <List data-testid="currency-list">
                {Object.entries(list.searchList).map((item, index) => (
                    <CurrencyWrapper
                        data-testid="currency-list-item"
                        key={index}
                        onClick={onChooseCurrency(item[0])}
                    >
                        <CurrencyTitle>{item[0]}</CurrencyTitle>
                        <CurrencySubTitle>{item[1]}</CurrencySubTitle>
                    </CurrencyWrapper>
                ))}
            </List>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchUpdateCurrentCurrencyState: (currency) => {
        dispatch(updateCurrentCurrency(currency));
    },
    dispatchUpdateTargetCurrencyState: (currency) => {
        dispatch(updateTargetCurrency(currency));
    },
    dispatchUpdateCurrencyListState: (list) => {
        dispatch(updateCurrencyList(list));
    },
});

const mapStateToProps = (state) => ({
    currencyList: state.currencyReducer.currencyList,
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyTab);
