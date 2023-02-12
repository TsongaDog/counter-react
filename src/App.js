import {useState} from "react";
let active = false;

function App() {
    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(count - 1);
        active = false
    }

    const increase = () => {
        setCount(count + 1);
        active = true
    }

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1 className={active ? 'plus' : 'minus'}>{count}</h1>
        <button className="minus" onClick={decrease}>Minus - </button>
        <button className="plus" onClick={increase}>Plus +</button>
      </div>
    </div>
  );
}

export default App;
