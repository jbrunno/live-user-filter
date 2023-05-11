import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
  picture: {
    large: string;
  };
}

const useUserList = (searchTerm: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api', {
          params: {
            results: 50,
            nat: 'br,us,mx,gb,nz,nl,ca',
          },
        });

        const filteredUsers = response.data.results.filter(
          filterUserBySearchTerm
        );

        setUsers(filteredUsers);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch users.');
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchTerm]);

  const filterUserBySearchTerm = (user: User) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const { city, country } = user.location;
    const cityLowerCase = city.toLowerCase();
    const countryLowerCase = country.toLowerCase();

    return (
      cityLowerCase.includes(searchTermLowerCase) ||
      countryLowerCase.includes(searchTermLowerCase)
    );
  };

  return { users, loading, error };
};

export default useUserList;
