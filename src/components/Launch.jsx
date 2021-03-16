import React from 'react';
import RocketView from '../views/RocketView';

const Launch = ({launch, expandedLaunch, setExpandedLaunch}) => {

  const showRocketData = expandedLaunch === `${launch.flight_number}${launch.mission_name}`;

  const toggleRocket = () => showRocketData ? setExpandedLaunch('') : setExpandedLaunch(`${launch.flight_number}${launch.mission_name}`);

  return (
    <li onClick={() => toggleRocket()}>
      <h2> { launch.mission_name } </h2>
      <div> Flight Number: { launch.flight_number } </div>
      {showRocketData && (
        <RocketView rocketId={launch.rocket.rocket_id} />
      )}
    </li>
  )
}

export default Launch;
