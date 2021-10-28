import * as React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Button } from './style';

const ChangeAccountBtn = ({ isSell, onClick }) => {
    let symbol = <AiOutlineArrowDown />;
    if (!isSell) {
        symbol = <AiOutlineArrowUp />;
    }

    return (
        <Button data-testid="changeCurrency" onClick={onClick}>
            {symbol}
        </Button>
    );
};

export default ChangeAccountBtn;
