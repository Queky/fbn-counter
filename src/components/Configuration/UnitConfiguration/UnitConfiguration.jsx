import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Subtitle from '../../Subtitle/Subtitle';

export const UnitConfiguration = ({setUnit}) => {

  const [selection, setSelection] = useState('metros');

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  }

  const setUnitInConfig = (unit) => {
    setSelection(unit);
    setUnit(unit)
  }

  const isActive = (unit) => {
    return selection === unit;
  }

  return(
    <>
    <Subtitle text="Unidad a usar"></Subtitle>
      <ButtonGroup className="center" size="lg" style={style}>
        <Button variant="primary" active={isActive('metros')} onClick={() => setUnitInConfig('metros')}>Metros</Button>
      </ButtonGroup>
    </>
  );
}

export default UnitConfiguration;