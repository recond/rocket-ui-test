import React from 'react';

const Rocket = ({rocketId,rocketData}) => {
  return (
    <div>
      <h4> ROCKET DETAILS </h4>
      <div>Rocket ID: {rocketId}</div>
      <div>Cost Per Launch: {rocketData[rocketId] && rocketData[rocketId].cost_per_launch}</div>
      <div>Description: {rocketData[rocketId] && rocketData[rocketId].description}</div>
    </div>
  )
}

export default Rocket;