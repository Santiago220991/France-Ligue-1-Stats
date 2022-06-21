import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/configureStore';
import NavBar from './components/NavBar';
import Header from './components/Header';
import TeamList from './components/TeamList';
import TeamStats from './components/TeamStats';
import { GetTeamsAPI } from './redux/teams/teams';
import './index.css';

Store.dispatch(GetTeamsAPI());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <Router>
      <React.StrictMode>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Header />
                <TeamList />
              </>
            )}
          />
          <Route path="/TeamStats/:teamname" element={<TeamStats />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </Provider>,
);
