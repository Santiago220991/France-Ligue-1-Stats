const GET_TEAMS = 'GET_TEAMS';
const initState = ['hola mundo'];

const TeamsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TEAMS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default TeamsReducer;
