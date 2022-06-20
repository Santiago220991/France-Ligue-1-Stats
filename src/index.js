import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './redux/configureStore';
import NavBar from './components/NavBar';
import Header from './components/Header';
import TeamList from './components/TeamList';
import { GetTeamsAPI } from './redux/teams/teams';
import './index.css';

Store.dispatch(GetTeamsAPI());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <NavBar />
      <Header />
      <TeamList />
    </React.StrictMode>
  </Provider>,
);
