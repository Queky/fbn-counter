import React from "react";

export const Subtitle = ({ children, text }) => {
  const style = {
    "text-align": "center",
  };

  return (
    <>
      <h2 style={style}>{text}</h2>
      {children}
    </>
  );
};
