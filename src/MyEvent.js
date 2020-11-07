import React from "react";
import "./MyEvent.css";
import { useState } from "react";

function MyEvent() {
  // у Ref есть ограничения надо изучать
  let textInput = React.createRef();
  let textOut = React.createRef();

  const [output, setOutput] = useState("Hello");

  function f1(arg) {
    console.log("arg: " + arg);
  }

  function f2() {
    console.log("1321");
  }

  function showInput(event) {
    console.log(event.target.value + " " + textInput.current.value);

    //плохое  решение
    textOut.current.innerHTML = textInput.current.value;

    //решение через State
    setOutput(textInput.current.value);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Button</h2>
        <button onClick={() => f1(1)}>Push</button>
      </section>
      <section>
        <h2>Double click + mouse move</h2>
        <div
          className="orange"
          onDoubleClick={() => f1(2)}
          onMouseMove={f2}
        ></div>
      </section>
      <section>
        <h2>Input</h2>
        <input
          type="text"
          onInput={showInput}
          ref={textInput}
          defaultValue="hi"
        />
        <p ref={textOut}></p>
        <h3>{output}</h3>
      </section>
    </>
  );
}

export default MyEvent;
