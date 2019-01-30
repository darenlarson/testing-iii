import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    describe('Open/Closed icon', () => {
        it('should render Closed when closed is equal to true', () => {
            const { getByText } = render(<Display closed={true} />);

            getByText(/closed/i);
        });
        it('should render Open when closed is equal to false', () => {
            const { getByText } = render(<Display closed={false} />);

            getByText(/open/i);
        });
        it('should have the background color red when closed is equal to true', () => {
            const { getByTestId } = render(<Display closed={true} />);

            const button = getByTestId('open-closed-btn');

            expect(button).toHaveClass('red-led');
        });
        it('should have the background color green when closed is equal false', () => {
            const { getByTestId } = render(<Display closed={false} />);

            const button = getByTestId('open-closed-btn');

            expect(button).toHaveClass('green-led');
        })
    });

    describe('Locked/Unlocked icon', () => {
        it('should render Locked when locked is equal to true', () => {
            const { getByText } = render(<Display locked={true} />);

            getByText("Locked");
        });
        it('should render Unlocked when locked is equal to false', () => {
            const { getByText } = render(<Display locked={false} />);

            getByText(/unlocked/i);
        });
        it('should have the background color red when locked is equal to true', () => {
            const { getByTestId } = render(<Display locked={true} />);

            const button = getByTestId('locked-unlocked-btn');

            expect(button).toHaveClass('red-led');
        });
        it('should have the background color green when closed is equal false', () => {
            const { getByTestId } = render(<Display locked={false} />);

            const button = getByTestId('locked-unlocked-btn');

            expect(button).toHaveClass('green-led');
        })
    });
});