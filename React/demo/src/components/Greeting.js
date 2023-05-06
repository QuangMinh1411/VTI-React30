import React from "react";

const Greeting = ({ name, age }) => {
  return (
    <div>
      <h1>Hello Mr {name}</h1>
      <p>You are {age}</p>
    </div>
  );
};

export default Greeting;
