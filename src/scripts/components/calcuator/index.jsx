import React, { useState } from "react";
import Button from "components/button";
import "./style.sass";
import NP from "number-precision";

const Calcuator = () => {
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const operators = ["-", "+", "="];
  // const decimelMark = ".";
  const clearMark = "AC";
  const [numberArray, SetNumberArray] = useState([]);
  const [numberDisplayArray, SetNumberDisplayArray] = useState([]);

  const getShowNumber = text => {
    let displayNumber = [...numberDisplayArray];
    if (numberArray.length > 0 && operators.indexOf(numberArray[numberArray.length - 1]) > -1) {
      displayNumber = [text];
    } else {
      if (displayNumber.length > 0) {
        displayNumber.push(text);
      } else {
        displayNumber = [text];
      }
    }
    SetNumberDisplayArray(displayNumber);
  };

  const genNumbersButtons = () => {
    let rows = [];
    for (let i = 0; i < numbers.length; i++) {
      if (i % 3 === 0) {
        rows.push(numbers.slice(i, i + 3));
      }
    }

    const result = rows.map((row, i) => {
      return (
        <div className="row" key={i}>
          {row.map(x => {
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
      );
    });
    //console.log(result);
    return result;
  };

  const calucate = (seqOperator) => {
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
    SetNumberArray(result === "" ? [] : seqOperator ? [result, seqOperator] : [result]);
    SetNumberDisplayArray(
      result === "" ? [] : (result + "").split()
    );
  }

  return (
    <div className="calcuator">
      <div className="display">{numberDisplayArray.join("")}</div>
      <div className="top">
        <div className="row">
          <Button
            key={clearMark}
            text={clearMark}
            clickHander={() => {
              SetNumberDisplayArray([]);
            }}
          ></Button>
          <Button text={"+/-"}></Button>
          <Button text={"%"}></Button>
          <Button text={"÷"} className="operator"></Button>
        </div>
      </div>
      <div className="center">
        <div className="left">{genNumbersButtons()}</div>
        <div className="right">
          {operators.map(x => {
            return (
              <Button
                key={x}
                text={x}
                className="operator"
                clickHander={op => {
                  if (op === "=") {
                    calucate();
                  } else {
                    //check if re-click operator
                    if (numberArray.indexOf(op) < 0) {
                      //check if change operator
                      let found = numberArray.find((x, index) => {
                        let opt = operators.indexOf(x);
                        if (opt > -1) {
                          return index;
                        }
                      });
                      if (found) {
                        numberArray.splice(numberArray.indexOf(found), 1);
                        let nosArry = [numberArray.join(""), op];
                        SetNumberArray(nosArry);
                      } else {
                        let nosArry = [numberDisplayArray.join(""), op];
                        SetNumberArray(nosArry);
                      }
                      SetNumberDisplayArray([]);
                    } else {
                      calucate(op);
                    }
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
