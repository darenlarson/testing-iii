import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('</Dashboard />', () => {
    it('Clicking the the Close Gate button changes the text in the button to Open Gate and changes the open/close icon to Closed with a red background, clicking again changes the text in the button to Close Gate and changes the open/close icon to Open with a Green background', () => {
        const { getByTestId } = render(<Dashboard />);

        const button = getByTestId('open-close-btn');
        const icon = getByTestId('open-closed-icon');
        
        fireEvent.click(button);

        expect(button).toHaveTextContent(/open gate/i);
        expect(icon).toHaveTextContent(/closed/i);
        expect(icon).toHaveClass('red-led');

        fireEvent.click(button);

        expect(button).toHaveTextContent(/close gate/i);
        expect(icon).toHaveTextContent(/open/i);
        expect(icon).toHaveClass('green-led');
    });
    it('Clicking the the Lock Gate button changes the text in the button to Unlock Gate and changes the locked/unlocked icon to Locked with a red background, clicking again changes the text in the button to Lock Gate and changes the Locked/Unlocked icon to Unlocked with a Green background', () => {
        const { getByTestId } = render(<Dashboard />);

        const LockButton = getByTestId('lock-btn');
        const openCloseButton = getByTestId('open-close-btn')
        const icon = getByTestId('locked-unlocked-icon');
        
        fireEvent.click(openCloseButton);
        fireEvent.click(LockButton);

        expect(LockButton).toHaveTextContent("Unlock Gate");
        expect(icon).toHaveTextContent("Locked");
        expect(icon).toHaveClass('red-led');

        fireEvent.click(LockButton);

        expect(LockButton).toHaveTextContent("Lock Gate");
        expect(icon).toHaveTextContent(/unlocked/i);
        expect(icon).toHaveClass('green-led');
    });
    it('shows the controls and display', () => {
        const { getByTestId } = render(<Dashboard />);

        const display = getByTestId('display');
        const controls = getByTestId('controls');

        expect(display).toBeInTheDocument();
        expect(controls).toBeInTheDocument();
    });
});