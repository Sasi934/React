import React, { useState } from 'react';

function   Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementBy5 = () => {
    setCount(count + 5);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Up Counter</button>
      <button onClick={decrement}>Down Counter</button>
      <button onClick={incrementBy5}>+5 Counter</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;