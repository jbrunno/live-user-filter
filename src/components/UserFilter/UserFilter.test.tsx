import { render, fireEvent } from '@testing-library/react';
import UserFilter from './UserFilter';

test('renders correctly', () => {
  const searchTerm = 'example';
  const onSearchTermChange = jest.fn();

  const { getByLabelText } = render(
    <UserFilter
      searchTerm={searchTerm}
      onSearchTermChange={onSearchTermChange}
    />
  );

  const searchInput = getByLabelText('Search by name or location'); // Atualize para o texto correto

  fireEvent.change(searchInput, { target: { value: 'new value' } });

  expect(onSearchTermChange).toHaveBeenCalledWith('new value');
  expect(searchInput).toMatchSnapshot();
});
