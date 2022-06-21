import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import Store from '../../redux/configureStore';
import Header from '../Header';
import TeamList from './__mocks__/TeamList';
import TeamStats from './__mocks__/TeamStats';
import { render } from '@testing-library/react';

describe('Testing React Components Rendering', () => {
  test('Testing Header Component', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Testing TeamList Component', () => {
    const tree = renderer.create(<Provider store={Store}><TeamList /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Testing TeamStats Component', () => {
    const tree = renderer.create(<Provider store={Store}><TeamStats /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('There should be a Team in the list called Paris Saint Germain', () => {
    const { container } = render(<Provider store={Store}><TeamList /></Provider>);
    expect(container).toHaveTextContent('Paris Saint Germain');
  });
  test('There should be a Team in the list called Paris Saint Germain', () => {
    const { container } = render(<Provider store={Store}><TeamList /></Provider>);
    expect(container).toHaveTextContent('Paris Saint Germain');
  });
  test('There should be a Team in the list called Marseille', () => {
    const { container } = render(<Provider store={Store}><TeamList /></Provider>);
    expect(container).toHaveTextContent('Marseille');
  });
  test('There should be a Team in the list called Paris Saint Germain with rank 1', () => {
    const { container } = render(<Provider store={Store}><TeamList /></Provider>);
    expect(container).toHaveTextContent('Paris Saint Germain');
    const rank=container.querySelector(".team-element")
    expect(rank).toHaveTextContent("Rank: 1")
  });
});
