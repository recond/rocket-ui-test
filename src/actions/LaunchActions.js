import LaunchService from '../services/LaunchService';
import * as ACTIONS from './LaunchTypes';

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return LaunchService.get().then(response => dispatch(receiveLaunches(response)));
};

export const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.launches.length || (!launchCollection.fetching && !launchCollection.launches.length);

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);
