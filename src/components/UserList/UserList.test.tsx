import { render } from '@testing-library/react';
import UserList from './UserList';

test('renders correctly', () => {
  const searchTerm = '';
  const { container } = render(<UserList searchTerm={searchTerm} />);
  expect(container).toMatchSnapshot();
});
