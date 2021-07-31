import React from 'react';
import { useState } from 'react';
import { DistanceConfiguration } from './DistanceConfiguration/DistanceConfiguration';
import { LaneConfiguration } from './LaneConfiguration/LaneConfiguration';
import UnitConfiguration from './UnitConfiguration/UnitConfiguration';

export const Configuration = ({children, setConfig}) => {

  const [lanes, setLanes] = useState(null);
  const [distance, setDistance] = useState(null);
  const [unit, setUnit] = useState(null);

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '2%',
    marginBottom: '2%',
  }

  return (
    <>
      <LaneConfiguration setLanes={setLanes} setDistance={setDistance}/>
      <UnitConfiguration setUnit={setUnit} />
      <DistanceConfiguration setDistance={setDistance} />
    </>
  );
};

export default Configuration;