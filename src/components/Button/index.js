import React from "react";

import "./styles.scss";

const Button = ({
  children,
  variant = "filled",
  Icon,
  type,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  width,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ marginTop, marginBottom, marginLeft, marginRight, width }}
      type={type}
      className={`button ${variant}`}
    >
      {Icon && <Icon className={"button-icon"} />}
      {children}
    </button>
  );
};

export default Button;
