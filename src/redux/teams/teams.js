const GET_TEAMS = 'GET_TEAMS';
const URL = 'https://v3.football.api-sports.io/standings?league=61&season=2021';
const KEY = 'd3741d422b890a7d05b30f44d3752898';

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
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': KEY,
    },
  });
  const LeagueSeason = await response.json();
  const TeamsList = LeagueSeason.response[0].league.standings[0];
  dispatch(GetTeams(TeamsList));
};

export default TeamsReducer;
