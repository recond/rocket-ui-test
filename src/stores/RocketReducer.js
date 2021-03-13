import * as ACTIONS from '../actions/RocketTypes';

const initialState = {
  rocketData: {},
  fetching: false
};

const actionHandlers = {
  [ACTIONS.REQUEST_ROCKET]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_ROCKET]: ({ state, action }) => ({
    ...state,
    fetching: false,
    rocketData: {
      ...state.rocketData,
      [action.payload.rocketId]: action.payload.rocketData
    }
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;