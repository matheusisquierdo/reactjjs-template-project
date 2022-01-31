import { useState } from 'react';
import './styles/global.scss';

export default function App() {
  const [counter, setCounter] = useState(0);

  function incrementar() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Hello World: {counter}</h1>
      <button type="button" onClick={incrementar}>
        INcremetar
      </button>
    </>
  );
}
