import React from 'react';
import useUserList from './hooks/useUserList';
import './UserList.css';

interface Props {
  searchTerm: string;
}

const UserList: React.FC<Props> = ({ searchTerm }) => {
  const { users, loading, error } = useUserList(searchTerm);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <img src={user.picture.large} alt={user.name.first} />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <span>{`${user.location.city}, ${user.location.country}`}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
