import React from "react";
import { useState } from "react";

function Comp2() {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState([]);

  const myRef = React.createRef();

  let handler = () => {
    let currentCount = count;
    currentCount++;

    setCount(currentCount);
  };

  let addComment = () => {
    let myComment = myRef.current.value;
    let comments = [...comment, myComment];

    setComment(comments);

    myRef.current.value = "";
  };

  return (
    <>
      <div>
        <button onClick={handler}>Change state</button>
      </div>
      <div>{count}</div>

      <div>
        <textarea ref={myRef}></textarea>
      </div>
      <div>
        <button onClick={addComment}>Add comment</button>
        <ul>
          {comment.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Comp2;
