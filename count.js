import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleDouble() {
    setCount(count * 2);
  }

  function handleSquare() {
    setCount(count ** 2);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDouble}>Double</button>
      <button onClick={handleSquare}>Square</button>
    </div>
  );
}

export default App;