import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import './styles/TeamList.css';

const TeamList = () => {
  const [Filter, setFilter] = useState('');
  const Store = useSelector((store) => store.teams);

  const onChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
  };

  return (
    <div className="team-list">
      <div className="team-list-header">
        <p>TEAMS</p>
        <input className="search-input" onChange={onChange} type="text" placeholder="Search.." />
      </div>
      <div className="teams">
        {Store.filter((item) => {
          if (Filter === '') {
            return item;
          } if (item.team.name.toLowerCase().includes(Filter.toLowerCase())) {
            return item;
          }
          return false;
        }).map((element) => (
          <div className="team-element" key={element.team.name} id={element.team.name}>
            <Link className="link" to={`/TeamStats/${element.team.name}`}>
              <BsArrowRightCircle className="right-arrow" />
              <img src={element.team.logo} alt="team-logo" />
              <p>{element.team.name}</p>
              <p>
                Rank:
                {' '}
                {element.rank}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamList;
