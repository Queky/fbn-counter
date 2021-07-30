import React from 'react';
import { Lane } from '../Lane/Lane';

export const Competition = ({children, config}) => {

  const multiplicate = (x, n) => Array.from(new Array(n), () => x);

  const lane = (a) => <Lane key={a}></Lane>

  return (
    <>
      {multiplicate(lane(1), config.lanes)}
      {children}
    </>
  );
};

export default Competition;