import React from 'react';
import { Lane } from '../Lane/Lane';

export const Competition = ({children, config}) => {

  const multiplicate = (x, n) => Array.from(new Array(n), () => x);

  const lane = <Lane></Lane>

  return (
    <>
      {multiplicate(lane, config.lanes)}
      {children}
    </>
  );
};

export default Competition;