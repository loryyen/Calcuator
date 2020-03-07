import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Calcuator from "components/calcuator";
import "assets/styles/index.sass";

const App = () => {
  return (
    <div className="calacator-wrapper">
      <Calcuator></Calcuator>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("app"));
