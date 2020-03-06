import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./style.sass";

const Button = props => {
  return (
    <div className="button" onClick={props.clickHander}>
      {props.number}
    </div>
  );
};

export default Button;
