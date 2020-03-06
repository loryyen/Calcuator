import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "components/button";
import "./style.sass";

const Calcuator = props => {
  let numbers = [7, 9, 8, 4, 5, 6, 1, 2, 3, 0];

  return (
    <div className="calcuator">
      <label></label>
      {numbers.map(x => {
        return (
          <Button
            number={x}
            clickHander={() => {
              alert("hello");
            }}
          ></Button>
        );
      })}
    </div>
  );
};

export default Calcuator;
