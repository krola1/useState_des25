import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);

    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </>
  );
}

export default Counter;
