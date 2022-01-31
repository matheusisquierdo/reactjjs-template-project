import { useState } from 'react';
import './styles/global.scss';

export default function App() {
  const [counter, setCounter] = useState(0);

  function incrementar() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Counter to test hot reload: {counter}</h1>
      <button type="button" onClick={incrementar}>
        Incrementar Contador
      </button>
    </>
  );
}
