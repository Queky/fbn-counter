import React from "react";

export const Title = ({ children, text }) => {
  const style = {
    "text-align": "center",
  };

  return (
    <>
      <h1 style={style}>{text}</h1>
      {children}
    </>
  );
};

export default Title;