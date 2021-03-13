import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Launch from '../components/Launch';

configure({ adapter: new Adapter() });

const mockStore = {
  getState: () => ({}),
  subscribe: () => 'random value',
  dispatch: () => {}
}

describe('app', () => {

  const mockLaunch = {
    mission_name: 'Mock Mission',
    flight_number: '999'
  }

  it('renders launches with flight numbers', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <Launch launch={mockLaunch} />
      </Provider>
    );
    expect(wrapper.text()).toContain(`Flight Number: ${mockLaunch.flight_number}`);
  })
})