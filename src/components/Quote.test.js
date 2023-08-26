import { render, screen } from '@testing-library/react';
import Quote from './Quote';
import '@testing-library/jest-dom/extend-expect';

test('testing Quote component', () => {
  const { container } = render(<Quote />);
  expect(container.firstChild).toMatchSnapshot();
});

test('simulating user interaction', () => {
  render(<Quote />);
  const quoteElement = screen.getByText('Loading the Quote');
  expect(quoteElement).toBeInTheDocument();
});
