import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {
    describe('Lock Gate/Unlock Gate button', () => {
        it('renders Lock Gate when locked is false', () => {
            const { getByText } = render(<Controls locked={false} />);
    
            getByText("Lock Gate");
        });

        it('renders Unlock Gate when locked is true', () => {
            const { getByText } = render(<Controls locked={true} />);
    
            getByText(/unlock gate/i);
        });

        it('has disabled attribute is active when closed is false', () => {
            const { getByTestId } = render(<Controls closed={false} />);

            const button = getByTestId('lock-btn');

            expect(button).toHaveAttribute('disabled');
        });

        it('does not have disabled attribute when closed is true', () => {
            const { getByTestId } = render(<Controls closed={true} />);

            const button = getByTestId('lock-btn');

            expect(button).not.toHaveAttribute('disabled');
        });
    });
});