import React from 'react';
import './TeamList.css';

const TeamList = () => (
  <div className="team-list">
    <div className="team-list-header">
      <p>TEAMS</p>
      <input className="search-input" type="text" placeholder="Search.." />
    </div>
    <div className="teams" />
  </div>
);

export default TeamList;
