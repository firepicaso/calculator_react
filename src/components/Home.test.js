import { render } from '@testing-library/react';
import Home from './home';

test('testing Home component', () => {
  const { container } = render(<Home />);
  expect(container.firstChild).toMatchSnapshot();
});
