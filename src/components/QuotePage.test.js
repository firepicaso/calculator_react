import QuotePage from './QuotePage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('testing QuotePage component', () => {
    const { container } = render(<QuotePage />);
    expect(container.firstChild).toMatchSnapshot();
});

test('simulating user interaction', () => {
    render(<QuotePage />);
    const quoteElement = screen.getByText('Loading the Quote');
    expect(quoteElement).toBeInTheDocument();
});