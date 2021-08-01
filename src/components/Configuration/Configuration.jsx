import React from 'react';
import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Pool from '../../domain/Pool/Pool';
import { DistanceConfiguration } from './DistanceConfiguration/DistanceConfiguration';
import { LaneConfiguration } from './LaneConfiguration/LaneConfiguration';
import UnitConfiguration from './UnitConfiguration/UnitConfiguration';

export const Configuration = ({children, setConfig, isVisible}) => {

  const [lanes, setLanes] = useState(null);
  const [distance, setDistance] = useState(null);
  const [unit, setUnit] = useState(null);

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    marginTop: '2%',
    marginLeft: '40%',
  }

  const finishConfig = () => {
    setConfig({pool: new Pool({distance: distance, lanes: lanes, unit: unit})})
  }

  return (
    <div style={{visibility: isVisible ? 'visible' : 'hidden'}}>
      <LaneConfiguration setLanes={setLanes} setDistance={setDistance}/>
      <UnitConfiguration setUnit={setUnit} />
      <DistanceConfiguration setDistance={setDistance} />
      <ButtonGroup size="lg" style={style}>
        <Button variant="primary" onClick={() => finishConfig()}>Comenzar</Button>
      </ButtonGroup>
    </div>
  );
};

export default Configuration;