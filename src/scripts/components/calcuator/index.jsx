import React, { useState } from "react";
import Button from "components/button";
import "./style.sass";
import NP from "number-precision";

const Calcuator = () => {
  const numbers = ["7", "9", "8", "4", "5", "6", "1", "2", "3", "0", "."];
  const operators = ["-", "+", "="];
  const decimelMark = ".";
  const clearMark = "AC";
  const [numberArray, SetNumberArray] = useState([]);
  const [numberDisplayArray, SetNumberDisplayArray] = useState([]);

  const getShowNumber = text => {
    let tmp = [...numberDisplayArray];

    let operator = numberArray.filter(x => {
      return operators.indexOf(x) > -1;
    });
    if (operator.length > 0 || numberArray.length > 0) {
      //'='
      if (text === decimelMark || tmp[tmp.length - 1] === decimelMark) {
        tmp.push(text);
      } else {
        tmp = [text];
      }
    } else {
      tmp.push(text);
    }
    console.log(tmp);
    SetNumberDisplayArray(tmp);
  };

  return (
    <div className="calcuator">
      <div className="display">{numberDisplayArray.join("")}</div>
      <div className="top">
        <div className="display-number">
          <Button
            key={clearMark}
            text={clearMark}
            clickHander={() => {
              SetNumberDisplayArray([]);
            }}
          ></Button>
        </div>
      </div>
      <div className="center">
        <div className="left">
          {numbers.map(x => {
            return (
              <Button
                key={x}
                text={x}
                className={x === "0" ? "zero" : ""}
                clickHander={text => {
                  getShowNumber(text);
                }}
              ></Button>
            );
          })}
        </div>
        <div className="right">
          {operators.map(x => {
            return (
              <Button
                key={x}
                text={x}
                className="operator"
                clickHander={op => {
                  if (op === "=") {
                    let n1 = numberArray[0];
                    let operator = numberArray[1];
                    let n2 = numberDisplayArray.join("");
                    let result = 0;
                    switch (operator) {
                      case "-":
                        result = NP.minus(n1 * 1, n2 * 1);
                        break;
                      case "+":
                        result = NP.plus(n1 * 1, n2 * 1);
                        break;
                      default:
                        result = "";
                    }
                    SetNumberArray(result === "" ? [] : [result]);
                    SetNumberDisplayArray(
                      result === "" ? [] : (result + "").split()
                    );
                  } else {
                    let nosArry = [numberDisplayArray.join(""), op];
                    SetNumberArray(nosArry);
                  }
                }}
              ></Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calcuator;
