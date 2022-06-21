import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import TeamsReducer from './teams/teams';

const Store = configureStore({
  reducer: {
    teams: TeamsReducer,
  },
  middleware: [thunk],
});

export default Store;
