import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Calcuator from "components/calcuator";

const App = () => {
  return (
    <div>
      <Calcuator></Calcuator>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("app"));
