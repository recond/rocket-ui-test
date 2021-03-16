import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchRocketData} from "../actions/RocketActions";
import Rocket from '../components/Rocket';

const RocketView = ({ rocketId }) => {
  const { fetching, rocketData = {} } = useSelector(state => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketData(rocketId));
  }, []);

  const getContent = () => {
    if (!rocketData[rocketId] || fetching) {
      return <div> LOADING </div>;
    }

    if (!rocketData[rocketId]) {
      return <div> NO DATA </div>;
    }

    return (
      <Rocket {...{
        rocketId,
        rocketData
      }} />
    )
  }

  return (
    <div className='rocketDetails'>
      <h4> ROCKET DETAILS </h4>
      {getContent()}
    </div>
    
  )
}

export default RocketView;