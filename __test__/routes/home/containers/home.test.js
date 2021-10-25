import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../../src/routes/home/containers/home';

describe('test <Index />', () => {
    const { container, getByTestId } = render(<Home />);

    it('<Index /> snapshot', () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Index /> and find title', () => {
        const elem = getByTestId('display_title');

        expect(elem.textContent).toBe('Welcome to React-Redux-App!');
    });
});
