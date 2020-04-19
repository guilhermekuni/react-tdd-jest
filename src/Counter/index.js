import React from 'react';

export default function Counter() {
  return (
    <>
      <h1>Counter:</h1>
      <div data-testid="counter"></div>
      <button>Increment</button>
      <button>Decrement</button>
    </>
  );
}
