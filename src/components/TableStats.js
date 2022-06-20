import React from 'react';
import PropTypes from 'prop-types';
import './styles/TableStats.css';

const TableStats = (props) => {
  const { home, away } = props;
  console.log(home);
  console.log(away);
  return (
    <div className="stats-table">
      <div className="home-stats">
        <p className="stats-title">HOME STATS</p>
        <div className="stats">
          <p>GAMES</p>
          <p>{home.played}</p>
        </div>
        <div className="stats">
          <p>WON</p>
          <p>{home.win}</p>
        </div>
        <div className="stats">
          <p>LOST</p>
          <p>{home.lose}</p>
        </div>
        <div className="stats">
          <p>DRAW</p>
          <p>{home.draw}</p>
        </div>
      </div>
      <div className="away-stats">
        <p className="stats-title">AWAY STATS</p>
        <div className="stats">
          <p>GAMES</p>
          <p>{away.played}</p>
        </div>
        <div className="stats">
          <p>WON</p>
          <p>{away.win}</p>
        </div>
        <div className="stats">
          <p>LOST</p>
          <p>{away.lose}</p>
        </div>
        <div className="stats">
          <p>DRAW</p>
          <p>{away.draw}</p>
        </div>
      </div>
    </div>
  );
};

TableStats.propTypes = {
  home: PropTypes.shape({
    draw: PropTypes.number.isRequired,

    goals: PropTypes.shape({
      against: PropTypes.number.isRequired,
      for: PropTypes.number.isRequired,
    }).isRequired,

    lose: PropTypes.number.isRequired,
    played: PropTypes.number.isRequired,
    win: PropTypes.number.isRequired,
  }).isRequired,

  away: PropTypes.shape({
    draw: PropTypes.number.isRequired,

    goals: PropTypes.shape({
      against: PropTypes.number.isRequired,
      for: PropTypes.number.isRequired,
    }).isRequired,

    lose: PropTypes.number.isRequired,
    played: PropTypes.number.isRequired,
    win: PropTypes.number.isRequired,
  }).isRequired,
};

export default TableStats;
