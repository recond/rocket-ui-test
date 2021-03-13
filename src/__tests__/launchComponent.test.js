import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Launch from '../components/Launch';

configure({ adapter: new Adapter() });

const mockStore = {
  getState: () => ({
    rockets: { rocketData: {}}
  }),
  subscribe: () => 'random value',
  dispatch: () => {}
}

describe('app', () => {

  const mockLaunch = {
    mission_name: 'Mock Mission',
    flight_number: '999',
    rocket: {
      rocket_id: 'mockRocket'
    }
  }

  const mockEmptyFunction = () => {};

  it('renders launches with flight numbers', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <Launch launch={mockLaunch} />
      </Provider>
    );
    expect(wrapper.text()).toContain(`Flight Number: ${mockLaunch.flight_number}`);
    expect(wrapper.text()).not.toContain(`Rocket ID: ${mockLaunch.rocket.rocket_id}`);
  })

  it('renders launch + rocket info', () => {
    const launchId = `${mockLaunch.flight_number}${mockLaunch.mission_name}`;

    const wrapper = mount(
      <Provider store={mockStore}>
        <Launch launch={mockLaunch} {
          ...{
            expandedLaunch: launchId,
            setExpandedLaunch: mockEmptyFunction
          }
        } />
    </Provider>);
    expect(wrapper.text()).toContain(`Flight Number: ${mockLaunch.flight_number}`);
    expect(wrapper.text()).toContain(`Rocket ID: ${mockLaunch.rocket.rocket_id}`);
  })

  it('expand launch on click', () => {
    let mockLaunchId = "MockLaunchId";
    const mockExpandFunction = (launchId) => {
      mockLaunchId = launchId;
    }

    const wrapper = mount(
      <Provider store={mockStore}>
        <Launch launch={mockLaunch} {
          ...{
            expandedLaunch: mockLaunchId,
            setExpandedLaunch: mockExpandFunction
          }
        } />
    </Provider>);
    expect(wrapper.text()).toContain(`Flight Number: ${mockLaunch.flight_number}`);
    expect(wrapper.text()).not.toContain(`Rocket ID: ${mockLaunch.rocket.rocket_id}`);
    wrapper.find('h2').simulate('click');
    expect(mockLaunchId).toEqual(mockLaunch.flight_number + mockLaunch.mission_name);
  });

  it('hide launch info on click', () => {
    let mockLaunchId = mockLaunch.flight_number + mockLaunch.mission_name;
    const mockExpandFunction = (launchId) => {
      mockLaunchId = launchId;
    }

    const wrapper = mount(
      <Provider store={mockStore}>
        <Launch launch={mockLaunch} {
          ...{
            expandedLaunch: mockLaunchId,
            setExpandedLaunch: mockExpandFunction
          }
        } />
    </Provider>);
    expect(wrapper.text()).toContain(`Flight Number: ${mockLaunch.flight_number}`);
    expect(wrapper.text()).toContain(`Rocket ID: ${mockLaunch.rocket.rocket_id}`);
    wrapper.find('h2').simulate('click');
    expect(mockLaunchId).toEqual('');
  });
})