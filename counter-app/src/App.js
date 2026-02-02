import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    if(count > 0){
      setCount(count - 1);
      return;
    }
    
  }
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
