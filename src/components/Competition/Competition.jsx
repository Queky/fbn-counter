import React from 'react';
import { Lane } from '../Lane/Lane';

export const Competition = ({children, config, isVisible}) => {

  const multiplicate = (x, n) => Array.from(new Array(n), () => x);

  const lane = (a) => <Lane key={a}></Lane>

  return (
    <div style={{visibility: isVisible ? 'visible' : 'hidden'}}>
      {multiplicate(lane(1), config.lanes)}
      {children}
    </div>
  );
};

export default Competition;