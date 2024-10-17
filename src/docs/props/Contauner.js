import React from "react";
import Component from "./Component";
import Component2 from "./Component2";

const Contauner = () => {
  return (
    <div>
      {/* <Component name={name} age={age} /> */}
      <Component2 printName = {printName}>
        <span>김애옹</span>
      </Component2>
    </div>
  );
};

export default Contauner;
