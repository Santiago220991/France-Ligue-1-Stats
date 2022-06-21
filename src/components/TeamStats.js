import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import TableStats from './TableStats';
import './styles/TeamStats.css';

const TeamStats = () => {
  const { teamname } = useParams();
  const Store = useSelector((store) => store.teams);
  const team = Store.filter((element) => element.team.name === teamname);
  const teaminfo = team[0];
  if (teaminfo !== undefined) {
    const GoalDifference = teaminfo.all.goals.for - teaminfo.all.goals.against;
    return (
      <div className="TeamStats">
        <div className="Header-Team-info">
          <img className="stats-logo" src={teaminfo.team.logo} alt="team-logo" />
          <div className="general-states">
            <p className="team-name-stats">{teaminfo.team.name}</p>
            <p>
              Rank:
              {' '}
              {teaminfo.rank}
            </p>
            <p>
              Points:
              {' '}
              {teaminfo.points}
            </p>
            <p>
              Games Won:
              {' '}
              {teaminfo.all.win}
            </p>
            <p>
              Games Lost:
              {' '}
              {teaminfo.all.lose}
            </p>
            <p>
              Goal Difference:
              {' '}
              {GoalDifference}
            </p>
          </div>
        </div>
        <TableStats home={teaminfo.home} away={teaminfo.away} />
      </div>
    );
  }
  return <div className="error" />;
};

export default TeamStats;
