const GET_TEAMS = 'GET_TEAMS';
const URL = 'https://v3.football.api-sports.io/standings?league=61&season=2021';
const KEY = '427479f309bcf990d28b6ba2c48e13eb';

const TeamsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TEAMS:
      return action.payload;
    default:
      return state;
  }
};

export const GetTeams = (list) => ({
  type: GET_TEAMS,
  payload: list,
});

export const GetTeamsAPI = () => async (dispatch) => {
  if (localStorage.getItem('statics') === null) {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': KEY,
      },
    });
    const LeagueSeason = await response.json();
    const TeamsList = LeagueSeason.response[0].league.standings[0];
    localStorage.setItem('statics', JSON.stringify(TeamsList));
    dispatch(GetTeams(TeamsList));
  } else {
    dispatch(GetTeams(localStorage.getItem('statics')));
  }
};

export default TeamsReducer;
