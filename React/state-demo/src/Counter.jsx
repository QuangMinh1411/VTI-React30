import React from 'react'

const Counter = ({count,increase,decrease,reset}) => {
    
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter