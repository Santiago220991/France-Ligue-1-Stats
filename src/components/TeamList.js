import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import './TeamList.css';

const TeamList = () => {
  const [Filter, setFilter] = useState('');
  const Store = useSelector((store) => store.teams);

  const onChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    console.log(Store);
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
