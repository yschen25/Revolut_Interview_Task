import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCurrencyList } from "../../action/updateCurrencyList";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { updateCurrentCurrency } from "../../action/updateCurrentCurrency";
import { updateTargetCurrency } from "../../action/updateTargetCurrency";
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
} from "./style";
import Api from "../../api";
import _ from "lodash";

const CurrencyTab = ({
  history: {location: {state: {isMe}}},
  currencyList,
  dispatchUpdateCurrentCurrencyState,
  dispatchUpdateTargetCurrencyState,
  dispatchUpdateCurrencyListState,
}) => {

  const [list, updateList] = useState({
    originalList: {},
    searchList: {},
    keyword: null,
  });

  useEffect(() => {
    async function fetchData() {
      let newCurrencyList = currencyList
      if (_.isEmpty(newCurrencyList)) {
        newCurrencyList = await Api.getCurrencyList();
        dispatchUpdateCurrencyListState(newCurrencyList);
      }

      updateList((list) =>
        doSearch({ ...list, originalList: newCurrencyList })
      );
    }

    fetchData();
  }, []);

  const doSearch = (list) => {
    const { keyword, originalList } = list;
    if (!keyword) {
      return { ...list, searchList: originalList };
    } else {
      const result = _.pickBy(originalList, (_value, key) =>
        key.includes(keyword)
      );

      return { ...list, searchList: result };
    }
  };

  const onChange = (e) => {
    const keyword = e.target.value.toUpperCase();
    updateList(doSearch({ ...list, keyword }));
  };

  let history = useHistory();
  const onChooseCurrency = (e) => {
    const currency = e.currentTarget.textContent;

    if (isMe) {
      dispatchUpdateCurrentCurrencyState(currency);
    } else {
      dispatchUpdateTargetCurrencyState(currency);
    }
    
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <Link style={linkStyle} to="/">
          <AiOutlineArrowLeft style={iconStyle} />
        </Link>
        <Input onChange={onChange} />
      </Wrapper>
      <List>
        {Object.entries(list.searchList).map((item, index) => (
          <CurrencyWrapper key={index}>
            <CurrencyTitle onClick={onChooseCurrency}>{item[0]}</CurrencyTitle>
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
