import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import Store from '../../redux/configureStore';
import NavBar from '../NavBar';
import Header from '../Header';
import TeamList from './__mocks__/TeamList';
import TeamStats from '../TeamStats';

describe('Testing user interaction', () => {
  test('Testing click over team details', () => {
    render(
      <Provider store={Store}>
        <Router>
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
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Paris Saint Germain'));
    expect(screen.getByText('Rank: 1')).toBeInTheDocument();
  });

  test('Testing click over back button <', () => {
    render(
      <Provider store={Store}>
        <Router>
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
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByTestId('backbtn'));
    expect(screen.getByText('2021-2022')).toBeInTheDocument();
  });
});
