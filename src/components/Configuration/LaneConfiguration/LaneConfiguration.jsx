import React, { useEffect } from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Subtitle from "../../Subtitle/Subtitle";

export const LaneConfiguration = ({children, setLanes, setDistance}) => {

  const [activeLane, setActiveLane] = useState(6);
  const [activeDistance, setActiveDistance] = useState(25);

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  }

  const setLaneNumber = (lane) => {
    setActiveLane(lane);
    setLanes(lane)
  };

  const setLaneDistance = (distance) => {
    setActiveDistance(distance);
    setDistance(distance);
  };

  const isLaneActive = (lane) => {
    return activeLane === lane;
  };

  const isDistanceActive = (distance) => {
    return activeDistance === distance;
  };

  useEffect(() => {
    setLanes(activeLane);
    setDistance(activeDistance);
  });

  return (
    <>
      <Subtitle text="Numero de calles"></Subtitle>
      <ButtonGroup className="center" size="lg" style={style}>
        <Button variant="primary" active={isLaneActive(6)} onClick={() => setLaneNumber(6)}>6</Button>
        <Button variant="primary" active={isLaneActive(8)} onClick={() => setLaneNumber(8)}>8</Button>
        <Button variant="primary" active={isLaneActive(10)} onClick={() => setLaneNumber(10)}>10</Button>
      </ButtonGroup>
      <Subtitle text="Distancia de las calles"></Subtitle>
      <ButtonGroup className="center" size="lg" style={style}>
        <Button variant="primary" active={isDistanceActive(25)} onClick={() => setLaneDistance(25)}>25</Button>
        <Button variant="primary" active={isDistanceActive(50)} onClick={() => setLaneDistance(50)}>50</Button>
      </ButtonGroup>
    </>
  );
}