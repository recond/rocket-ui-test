import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import launchCollection from './LaunchCollectionReducer';
import rocketReducer from './RocketReducer';

const rootReducer = combineReducers({
  launchCollection,
  rockets: rocketReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
