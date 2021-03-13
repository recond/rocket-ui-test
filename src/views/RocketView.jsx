import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchRocketData} from "../actions/RocketActions";
import Rocket from '../components/Rocket';

const RocketView = ({ rocketId }) => {
  const { rocketData = {} } = useSelector(state => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketData(rocketId));
  }, []);

  return (
    <Rocket {...{
      rocketId,
      rocketData
    }}
    />
  )
}

export default RocketView;