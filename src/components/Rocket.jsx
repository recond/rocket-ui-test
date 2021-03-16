import React, { Fragment } from 'react';

const Rocket = ({rocketId,rocketData}) => {
  return (
    <Fragment>
      <div><span className="rocketDataTitle">Rocket ID:</span> {rocketId}</div>
      <div><span className="rocketDataTitle">Cost Per Launch:</span> {rocketData[rocketId] && rocketData[rocketId].cost_per_launch}</div>
      <div><span className="rocketDataTitle">Description:</span> {rocketData[rocketId] && rocketData[rocketId].description}</div>
    </Fragment>
  )
}

export default Rocket;