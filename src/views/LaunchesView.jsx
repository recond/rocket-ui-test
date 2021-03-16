import React, {useEffect, useState} from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/LaunchActions";
import Launch from '../components/Launch';

const LaunchesView = ({ dispatch, launchCollection }) => {
  useEffect(() => {
    fetchLaunchesIfNeeded({ dispatch, launchCollection });
  }, []);

  const [expandedLaunch, setExpandedLaunch] = useState('');

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
            key: `${launch.flight_number}${launch.mission_name}`,
            launch,
            expandedLaunch,
            setExpandedLaunch
          }} />
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h1> SpaceX launches </h1>
      {getContent()}
    </div>
  );
}

export default ConnectedView(LaunchesView, 'launches');
