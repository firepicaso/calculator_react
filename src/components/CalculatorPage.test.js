import CalculatorPage from "./CalculatorPage";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('testing CalculatorPage component', () => {
    const { container } = render(<CalculatorPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
  
  test('simulating user interaction', () => {
    render(<CalculatorPage />);
  
    const buttonElement = screen.getByText('2');
    fireEvent.click(buttonElement);
  
    const resultElements = screen.queryAllByText('2');
    const resultElement = resultElements.find((element) => element.tagName === 'DIV');
    expect(resultElement).toBeInTheDocument();
});