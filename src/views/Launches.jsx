import React, {useEffect} from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/LaunchActions";
import Launch from '../components/Launch';

const LaunchesView = ({ dispatch, launchCollection }) => {
  useEffect(() => {
    fetchLaunchesIfNeeded({ dispatch, launchCollection });
  }, []);

  const getContent = () => {
    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    return (
      <ul>
        {launchCollection.launches.map(launch => (
          <Launch {...{
            key: launch.launch_id,
            launch
          }} />
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h2> SpaceX launches </h2>
      {getContent()}
    </div>
  );
}

export default ConnectedView(LaunchesView, 'launches');
