import React, { useState } from 'react';
import './TeamList.css';

const TeamList = () => {
  const [Filter, setFilter] = useState('');

  const onChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    console.log(Filter);
  };

  return (
    <div className="team-list">
      <div className="team-list-header">
        <p>TEAMS</p>
        <input className="search-input" onChange={onChange} type="text" placeholder="Search.." />
      </div>
      <div className="teams" />
    </div>
  );
};
export default TeamList;
