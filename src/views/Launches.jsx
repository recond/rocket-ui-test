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

    let launches = [];

    for (let i = 0; i < launchCollection.launches.length; i++) {
      const launch = launchCollection.launches[i];

      launches.push(
        <Launch {...{
          key: launch.launch_id,
          launch
        }} />

      )
    }

    return <ul>{launches}</ul>;
  }

  return (
    <div>
      <h2> SpaceX launches </h2>
      {getContent()}
    </div>
  );
}

export default ConnectedView(LaunchesView, 'launches');
