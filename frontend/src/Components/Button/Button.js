import React from "react";
import "./Button.style.scss";

const Button = ({ text, onClick, type }) => {
  return <button type={type} onClick={onClick}>{text}</button>;
};

export default Button;
