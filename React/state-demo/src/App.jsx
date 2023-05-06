import "./App.css";
import Counter from "./Counter";
import { useState } from 'react'
function App() {
  const [count,setCount] = useState(0)
  
    const increaseHandle = ()=>{
        setCount(count+1);
    }
    const decreaseHandle = ()=>{
        setCount(count-1)
    }
    const reset =()=>{
      setCount(0);
    }
  return (
    <div className="App">
      <Counter count={count} increase={increaseHandle} decrease={decreaseHandle} reset={reset} />
    </div>
  );
}

export default App;
