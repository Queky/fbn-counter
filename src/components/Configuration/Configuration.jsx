import React from 'react';
import { useState } from 'react';
import { DistanceConfiguration } from './DistanceConfiguration/DistanceConfiguration';
import { LaneConfiguration } from './LaneConfiguration/LaneConfiguration';

export const Configuration = ({children, setConfig}) => {

  const [lanes, setLanes] = useState(null);
  const [distance, setDistance] = useState(null);
  const [unit, setUnit] = useState(null);

  return (
    <>
      <LaneConfiguration setLanes={setLanes}>

      </LaneConfiguration>
      <DistanceConfiguration setDistance={setDistance}>

      </DistanceConfiguration>
    </>
  );
};

export default Configuration;