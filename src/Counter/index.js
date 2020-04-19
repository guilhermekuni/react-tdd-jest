import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter:</h1>
      <div data-testid="counter">{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button>Decrement</button>
    </>
  );
}
