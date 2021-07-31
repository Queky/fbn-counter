import React from "react";

export const Title = ({ children, text }) => {
  const style = {
    textAlign: 'center',
    marginTop: '2%',
  };

  return (
    <>
      <h1 style={style}>{text}</h1>
      {children}
    </>
  );
};

export default Title;
