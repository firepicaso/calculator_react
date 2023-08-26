import Calculator from "./Calculator";
import { render, screen, fireEvent } from '@testing-library/react';

test('testing Calculator component', () => {
    render(<Calculator />);
    const calculatorComponent = screen.getByTestId('calculator-component');
    expect(calculatorComponent).toMatchSnapshot();
});

test('testing buttons', () => {
    render(<Calculator />);
  
    const button1 = screen.getByText('1');
    const buttonPlus = screen.getByText('+');
    const buttonEquals = screen.getByText('=');
  
    const display = screen.getByTestId('display');
  
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
  
    expect(display.textContent).toBe('2');
});