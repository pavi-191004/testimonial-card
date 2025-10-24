import React from "react";

const CardContainer = ({ children, dark }) => (
  <div className={`card ${dark ? "dark" : "light"}`}>{children}</div>
);

export default CardContainer;
