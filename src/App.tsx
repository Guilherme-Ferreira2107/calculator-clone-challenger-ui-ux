/* eslint-disable no-eval */
import { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { VscColorMode, VscChromeClose } from "react-icons/vsc";
import "vanilla-tilt";

import "./styles.css";

function App() {
  const [result, setResult] = useState("0");
  const [value, setValue] = useState<string>("0");
  const buttonSuperior = ["C", "%", "<<"];
  const buttonsNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const buttonsRight = ["/", "*", "-", "+", "="];
  const buttonsInferior = ["00", "0", "."];
  const lastCharPorcent = value[value.length - 1] === "%";
  const lastCharDivisor = value[value.length - 1] === "/";
  const lastCharMultiply = value[value.length - 1] === "*";
  const lastCharSub = value[value.length - 1] === "-";
  const lastCharSum = value[value.length - 1] === "+";
  const lastCharPoint = value[value.length - 1] === ".";
  const lastCharAllConditions =
    lastCharPorcent ||
    lastCharDivisor ||
    lastCharMultiply ||
    lastCharSub ||
    lastCharSum ||
    lastCharPoint;

  const getValue = (newValue: string) => {
    if (value === "0") {
      setValue(newValue);
      return;
    }

    const val = value + newValue;
    setValue(val);
  };

  const getOperator = (newValue: string) => {
    if (newValue === value[value.length - 1]) return;

    if (newValue === "C") {
      setResult("0");
      setValue("0");
      return;
    }

    if (newValue === "=") {
      if (value.length && !lastCharAllConditions) {
        setResult(eval(String(value)));
      }
      return;
    }

    if (newValue === "<<") {
      if (value.length === 1) return setValue("0");
      let valCurrent = value;
      let newVal = valCurrent.substring(0, valCurrent.length - 1);
      return setValue(newVal);
    }

    if (lastCharAllConditions) {
      let valCurrent = value;
      let newVal = valCurrent.substring(0, valCurrent.length - 1);
      return setValue(newVal + newValue);
    }

    return setValue(value + newValue);
  };

  const formatResult = (value: string) => {
    return Number(value);
  };

  return (
    <div className="container-main">
      <div className="calculator" data-tilt>
        <div className="theme">
          <button>
            <VscColorMode />
          </button>
        </div>

        <div className="display">
          <div className="show-prev">{value}</div>
          <div className="show-result">{formatResult(result)}</div>
        </div>

        <div className="controllers">
          <div className="column-left">
            <div>
              {buttonSuperior.map((item, idx) => (
                <button key={idx} onClick={() => getOperator(item)}>
                  {item === "<<" ? <RiDeleteBack2Fill /> : item}
                </button>
              ))}
            </div>

            <div>
              {buttonsNumbers.map((item, idx) => (
                <button key={idx} onClick={() => getValue(item)}>
                  {item}
                </button>
              ))}
            </div>

            <div>
              {buttonsInferior.map((item, idx) => (
                <button key={idx} onClick={() => getOperator(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="column-right">
            {buttonsRight.map((item, idx) => (
              <button key={idx} onClick={() => getOperator(item)}>
                {item === "*" ? <VscChromeClose /> : item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
