import TeamsReducer from '../../redux/teams/teams';

describe('Testing Redux Store', () => {
  test('Getting Teams From the API', () => {
    const GET_TEAMS = 'GET_TEAMS';
    const TEAMS = [{ name: 'Paris Saint Germain', rank: 1 }, { name: 'Marseille', rank: 2 }];
    const action = {
      type: GET_TEAMS,
      payload: TEAMS,
    };
    const result = TeamsReducer([], action);
    expect(result).toStrictEqual(TEAMS);
  });
  test('Testing Default Case', () => {
    const ANYTHING = 'ANYTHING';
    const action = {
      type: ANYTHING,
      payload: ANYTHING,
    };
    const result = TeamsReducer([], action);
    expect(result).toStrictEqual([]);
  });
});
