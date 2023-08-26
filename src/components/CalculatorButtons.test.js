import CalculatorButtons from "./CalculatorButtons";
import { render, screen, fireEvent } from '@testing-library/react';

test('renders Button component', () => {
    const { container } = render(<CalculatorButtons label="1" onClick={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  
  test('simulating user interaction', () => {
    const clickButtons = jest.fn();
    render(<CalculatorButtons label="1" onClick={clickButtons} />);
    const buttonElement = screen.getByText('1');
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(clickButtons).toHaveBeenCalledTimes(2);
});
