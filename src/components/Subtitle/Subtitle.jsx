import React from "react";

export const Subtitle = ({ children, text }) => {
  const style = {
    textAlign: 'center',
    marginTop: '2%',
  };

  return (
    <>
      <h2 style={style}>{text}</h2>
      {children}
    </>
  );
};

export default Subtitle;