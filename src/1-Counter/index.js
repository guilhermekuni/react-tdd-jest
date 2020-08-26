import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter:</h1>
      <div data-testid="counter">{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
