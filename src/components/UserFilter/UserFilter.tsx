import React from 'react';
import './UserFilter.css';

interface UserFilterProps {
  searchTerm: string;
  onSearchTermChange: (newSearchTerm: string) => void;
}

const UserFilter: React.FC<UserFilterProps> = ({
  searchTerm,
  onSearchTermChange,
}) => {
  return (
    <div className="search-container">
      <label htmlFor="search">Search by name or location</label>
      <input
        className="search-input"
        placeholder="Search..."
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  );
};

export default UserFilter;
