import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Filter = '';
const Store = [{
  team: {
    id: 85,
    logo: 'https://media.api-sports.io/football/teams/85.png',
    name: 'Paris Saint Germain',
  },
  rank: 1,

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
const TemaListmock = () => (
  <div className="team-list">
    <div className="team-list-header">
      <p>TEAMS</p>
      <input className="search-input" type="text" placeholder="Search.." />
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
        <div className="team-element" key={element.team.name}>
          <BsFillArrowRightCircleFill className="right-arrow" />
          <img src={element.team.logo} alt="team-logo" />
          <p>{element.team.name}</p>
          <p>
            Rank:
            {' '}
            {element.rank}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default TemaListmock;
