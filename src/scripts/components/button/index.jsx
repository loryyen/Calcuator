import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./style.sass";

const Button = props => {
  return (
    <div
      className={`button ${props.className}`}
      onClick={() => props.clickHander(props.text)}
    >
      {props.text}
    </div>
  );
};

export default Button;
