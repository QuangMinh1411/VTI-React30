import "./App.css";
import Counter from "./Counter";
import { useState } from 'react'
function App() {
  const [counter,setCount] = useState(0)
  const [num,setNum] = useState(0);
    const increaseHandle = ()=>{
        setCount(counter+num);
    }
    const decreaseHandle = ()=>{
        setCount(counter-num)
    }
    const reset =()=>{
      setCount(0);
    }
    const handleChange = (e)=>{
      setNum(Number(e.target.value))
    }
  return (
    <div className="App">
      <Counter count={counter} 
      increase={increaseHandle} decrease={decreaseHandle} 
      reset={reset}
      handleChange={handleChange} />
    </div>
  );
}

export default App;
