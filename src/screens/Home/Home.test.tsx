import { render } from '@testing-library/react';
import Home from './Home';

test('renders correctly', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
