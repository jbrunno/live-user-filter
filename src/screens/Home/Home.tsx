import React, { useState } from 'react';
import UserList from '../../components/UserList/UserList';
import UserFilter from '../../components/UserFilter/UserFilter';
import './Home.css';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="home-container">
      <header className="container-header">
        <h1>Live User Filter</h1>
        <div className="home-filter">
          <UserFilter
            searchTerm={searchTerm}
            onSearchTermChange={handleSearchTermChange}
          />
        </div>
      </header>
      <div className="home-content">
        <div className="user-list-container">
          <div className="user-list">
            <UserList searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
