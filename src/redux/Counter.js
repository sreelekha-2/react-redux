import React, { useState, useEffect } from 'react';
import { store } from './store';
import { increment, decrement } from './actions';

export default function Counter() {
  const [counterVal, setCounterVal] = useState(0);

  // useEffect(() => {
  //   render();
  // }, []);
  const render = () => {
    const state = store.getState();
    setCounterVal(state.count);
  };
  store.subscribe(render);

  const onIncrement = () => {
    store.dispatch(increment());
  };
  const onDecrement = () => {
    store.dispatch(decrement());
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>{counterVal}</p>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
