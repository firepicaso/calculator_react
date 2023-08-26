import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('testing Apppage component', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});

test('simulating user interaction', () => {
  render(<App />);

  const quoteElement = screen.getByText('Math Magicians');
  expect(quoteElement).toBeInTheDocument();
});
