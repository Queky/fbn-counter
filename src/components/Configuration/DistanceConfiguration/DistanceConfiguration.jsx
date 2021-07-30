import React from 'react';
import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Subtitle from '../../Subtitle/Subtitle';

export const DistanceConfiguration = ({children, setDistance}) => {

  const [selection, setSelection] = useState(800);

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const setDistanceInConfig = (distance) => {
    setSelection(distance);
    setDistance(distance)
  }

  const isActive = (distance) => {
    return selection === distance;
  }

  return(
    <>
    <Subtitle text="Distancia de la prueba"></Subtitle>
      <ButtonGroup className="center" size="lg" style={style}>
        <Button variant="primary" active={isActive(800)} onClick={() => setDistanceInConfig(800)}>800</Button>
        <Button variant="primary" active={isActive(1500)} onClick={() => setDistanceInConfig(1500)}>1500</Button>
      </ButtonGroup>
      {children}</>
  );
}

export default DistanceConfiguration;