import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Subtitle from "../../Subtitle/Subtitle";

export const LaneConfiguration = ({children, setLanes}) => {

  const [selection, setSelection] = useState(6);

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const setLaneInConfig = (lane) => {
    setSelection(lane);
    setLanes(lane)
  }

  const isActive = (lane) => {
    return selection === lane;
  }

  return (
    <>
      <Subtitle text="Numero de calles"></Subtitle>
      <ButtonGroup className="center" size="lg" style={style}>
        <Button variant="primary" active={isActive(6)} onClick={() => setLaneInConfig(6)}>6</Button>
        <Button variant="primary" active={isActive(8)} onClick={() => setLaneInConfig(8)}>8</Button>
        <Button variant="primary" active={isActive(10)} onClick={() => setLaneInConfig(10)}>10</Button>
      </ButtonGroup>
      {children}
    </>
  );
}