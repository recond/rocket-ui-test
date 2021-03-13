import RocketService from '../services/RocketService';
import * as ACTIONS from './RocketTypes';

export const requestRocket = () => ({
  type: ACTIONS.REQUEST_ROCKET
});

const receiveRocket = (response, rocketId) => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocketId,
    rocketData: response.data
  }
});

export const fetchRocket = dispatch => {
  dispatch(requestRocket());
  return RocketService.get().then(response => dispatch(receiveRocket(response)));
};

export const shouldFetchRocket = (rocketId, rocketData) => !rocketData || (!rocketData.fetching && !rocketData[rocketId]);

export const fetchRocketIfNeeded = ({ dispatch, rocketId, rocketData }) =>
  shouldFetchRocket(rocketId, rocketData) && fetchRocket(dispatch, rocketId);

export const fetchRocketData = rocketId => (dispatch, getState) => {
    const {
      rockets: { rocketData }
    } = getState();
    return fetchRocketIfNeeded({ dispatch, rocketId, rocketData });
  };