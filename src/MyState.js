import React from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

function MyState() {
  return (
    <>
      <h1>Состояния</h1>
      <p>state в классовых компонентах </p>
      <Comp1 />
      <hr />
      <p>state в функциональных компонентах </p>
      <Comp2 />
    </>
  );
}

export default MyState;
