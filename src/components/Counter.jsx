import { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <Button>
          <button type="button" onClick={decrement}>
            -
          </button>
          {count}
          <button type="button" onClick={increment}>
            +
          </button>
    </Button>
  );
};

const Button = styled.button`
background-color: white;
border: none;
color: #1c2c46;
button {
    background-color: #ba9b5c;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    color: white;
    margin-left: 2px;
    margin-right: 2px;
}
`;


export default Counter;
