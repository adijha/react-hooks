import React, { useState } from 'react';
import '../App.scss';

const Counter: React.FC = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const reducefive = () => {
    for (let i = 5; i > 0; i--) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className='App'>
      <h1>Ultimately I am going to make a TODO app</h1>
      <h1>Ultimately Let's begin with flutter like counter app</h1>
      <section>
        <h2> Count is {count}</h2>
      </section>
      <aside>
        <h3>Play little bit With it</h3>
      </aside>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Raise Count</button>
      <hr />
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Reduce Count</button>
      <hr />
      <button onClick={() => setCount((prevCount) => prevCount + 5)}>
        Raise by 5 Count
      </button>
      <hr />
      <button onClick={reducefive}>Reduce by 5 Count</button>
      <hr />
      <button onClick={() => setCount(initialCount)}>Reset Values</button>
    </div>
  );
};

export default Counter;
