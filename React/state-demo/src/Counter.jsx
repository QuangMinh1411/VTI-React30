import React from 'react'

const Counter = ({count,increase,decrease,reset,handleChange}) => {
   
  return (
    <div>
      <div>{count}</div>
      Add <input type='number' onChange={handleChange} />
      <br />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter