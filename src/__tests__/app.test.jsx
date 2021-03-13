import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Routes from '../routes';

configure({ adapter: new Adapter() });

const mockStore = {
  getState: () => ({}),
}

describe('app', () => {
  it('renders without crashing', () => {
    shallow(
    <Provider store={mockStore}>
      <Routes />
    </Provider>
    );
  });
});
