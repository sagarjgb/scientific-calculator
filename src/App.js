import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup"; //importing button group { react material ui component }

const App = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    // to do basic math operations
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Syntax Error");
    }
  };

  const fact = (result) => {
    if (result === 0) {
      return 1;
    } else if (result === 1) {
      return 1;
    } else if (result < 0) {
      return "Syntax Error";
    }
    return result * fact(result - 1);
  };
  const inverse = (result) => {
    if (result === 0) {
      return Infinity;
    } else return 1 / result;
  };

  return (
    <div className="container">
      <p id="cpy">
        SASIO
        <br />
      </p>
      <p id="modname">SAG77</p>
      <form>
        <input type="text" value={result} />
      </form>
      {/* built in js math methods to do advance math operation */}
      <div className="sfun">
        {/* Make use of ButtonGroup tag to group buttons */}
        <ButtonGroup variant="text" size="small" aria-label="text button group">
          <button
            name="sin"
            size="small"
            onClick={() => setResult(Math.sin(result).toString())}
          >
            sin
          </button>
          <button
            name="cos"
            size="small"
            onClick={() => setResult(Math.cos(result).toString())}
          >
            cos
          </button>
          <button
            name="tan"
            size="small"
            onClick={() => setResult(Math.tan(result).toString())}
          >
            tan
          </button>{" "}
        </ButtonGroup>
        <ButtonGroup variant="text" size="small" aria-label="text button group">
          <button
            name="sinh"
            size="small"
            onClick={() => setResult(Math.sinh(result).toString())}
          >
            sinh
          </button>
          <button
            name="cosh"
            size="small"
            onClick={() => setResult(Math.cosh(result).toString())}
          >
            cosh
          </button>
          <button
            name="tanh"
            size="small"
            onClick={() => setResult(Math.tanh(result).toString())}
          >
            tanh
          </button>
        </ButtonGroup>
        <ButtonGroup variant="text" size="small" aria-label="text button group">
          <button
            name="sqrt"
            size="small"
            onClick={() => setResult(Math.sqrt(result).toString())}
          >
            √
          </button>
          <button
            name="inverse"
            size="small"
            onClick={() => setResult(inverse(result).toString())}
          >
            x<sup>-1</sup>
          </button>
          <button
            name="log"
            size="small"
            onClick={() => setResult(Math.log10(result).toString())}
          >
            log
          </button>
          <button
            name="ln"
            size="small"
            onClick={() => setResult(Math.log(result).toString())}
          >
            ln
          </button>
          <button
            name="square"
            size="small"
            onClick={() => setResult(Math.pow(result, 2).toString())}
          >
            x<sup>2</sup>
          </button>
          <button
            name="cube"
            size="small"
            onClick={() => setResult(Math.pow(result, 3).toString())}
          >
            x<sup>3</sup>
          </button>
        </ButtonGroup>
        <ButtonGroup variant="text" size="small" aria-label="text button group">
          <button
            name="pi"
            size="small"
            onClick={() => setResult(result.concat(Math.PI.toString()))}
          >
            π
          </button>
          <button
            name="e"
            size="small"
            onClick={() => setResult(Math.E.toString())}
          >
            e
          </button>
          <button
            name="factorial"
            size="small"
            onClick={() => setResult(fact(result).toString())}
          >
            x!
          </button>
          <button
            name="d/dx"
            size="small"
            onClick={() => setResult(Math.derivative(result).toString())}
          >
            ∂/∂x
          </button>
          <button
            name="integrate"
            size="small"
            onClick={() => setResult(Math.integrate(result).toString())}
          >
            ∫
          </button>
        </ButtonGroup>
      </div>

      <div className="keypad">
        {/* make use of material-ui button component */}
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={clear}
          id="clear"
        >
          Clear
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={backspace}
          id="backspace"
        >
          C
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          name="/"
          onClick={handleClick}
        >
          &divide;
        </Button>
        <Button variant="outlined" name="7" onClick={handleClick}>
          7
        </Button>
        <Button variant="outlined" name="8" onClick={handleClick}>
          8
        </Button>
        <Button variant="outlined" name="9" onClick={handleClick}>
          9
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          name="*"
          onClick={handleClick}
        >
          &times;
        </Button>
        <Button variant="outlined" name="4" onClick={handleClick}>
          4
        </Button>
        <Button variant="outlined" name="5" onClick={handleClick}>
          5
        </Button>
        <Button variant="outlined" name="6" onClick={handleClick}>
          6
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          name="-"
          onClick={handleClick}
        >
          &ndash;
        </Button>
        <Button variant="outlined" name="1" onClick={handleClick}>
          1
        </Button>
        <Button variant="outlined" name="2" onClick={handleClick}>
          2
        </Button>
        <Button variant="outlined" name="3" onClick={handleClick}>
          3
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          name="+"
          onClick={handleClick}
        >
          +
        </Button>
        <Button variant="outlined" name="0" onClick={handleClick}>
          0
        </Button>
        <Button variant="outlined" name="." onClick={handleClick}>
          .
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={calculate}
          id="result"
        >
          =
        </Button>
      </div>
    </div>
  );
};

export default App;
