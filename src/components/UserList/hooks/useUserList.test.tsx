import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useUserList from './useUserList';

describe('useUserList', () => {
  const mockAdapter = new MockAdapter(axios);

  afterEach(() => {
    mockAdapter.reset();
  });

  it('should handle error when fetching users', async () => {
    const mockError = 'Failed to fetch users.';
    mockAdapter.onGet('/users').networkError();

    const { result, waitForNextUpdate } = renderHook(() => useUserList(''));

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.users).toEqual([]);
    expect(result.current.error).toBe(mockError);
  });
});
