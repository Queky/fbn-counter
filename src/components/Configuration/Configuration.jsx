import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Subtitle from '../Subtitle/Subtitle';
import 'bootstrap/dist/css/bootstrap.css';

export const Configuration = ({children, setConfig}) => {

  const style = {
    "textAlign": "center",
  };


  return (
    <>
      <Subtitle text="Numero de calles"></Subtitle>
      <ButtonGroup className="center" size="lg" style={style}>
        <Button variant="primary" onClick={() => setConfig({lane: 6})}>6</Button>
        <Button variant="primary" onClick={() => setConfig({lane: 8})}>8</Button>
        <Button variant="primary" onClick={() => setConfig({lane: 10})}>10</Button>
      </ButtonGroup>
    </>
  );
};

export default Configuration;