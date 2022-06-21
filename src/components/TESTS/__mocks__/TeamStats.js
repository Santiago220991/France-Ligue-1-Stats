const Stored = [{
  team: {
    id: 85,
    logo: 'https://media.api-sports.io/football/teams/85.png',
    name: 'Paris Saint Germain',
  },
  rank: 1,
  home: {
    draw: 3,
    lose: 0,
    played: 19,
    win: 16,
    goals: {
      against: 12,
      for: 49,
    },
  },
  away: {
    draw: 5,
    lose: 4,
    played: 19,
    win: 10,
    goals: {
      against: 24,
      for: 41,
    },
  },
  all: {
    draw: 8,
    lose: 4,
    played: 38,
    win: 26,
    goals: {
      against: 36,
      for: 90,
    },
  },
},
{
  team: {
    id: 81,
    logo: 'https://media.api-sports.io/football/teams/81.png',
    name: 'Marseille',
  },
  rank: 2,
},
];

const teamname = 'Paris Saint Germain';
const team = Stored.filter((element) => (element.team.name === teamname));
const teaminfo = team[0];
const GoalDifference = teaminfo.all.goals.for - teaminfo.all.goals.against;

const TeamStats = () => (
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
  </div>
);

export default TeamStats;
