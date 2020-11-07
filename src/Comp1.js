import React from "react";

class Comp1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      comment: [],
    };
    this.myRef = React.createRef();
  }

  handler = () => {
    let currentCount = this.state.count;
    currentCount++;

    this.setState({ count: currentCount });
  };

  addComment = () => {
    let myComment = this.myRef.current.value;
    let comments = this.state.comment;
    comments.push(myComment);

    this.setState({ comment: comments });
    this.myRef.current.value = "";
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.handler}>Change state</button>
        </div>
        <div>{this.state.count}</div>
        <div>
          <textarea ref={this.myRef}></textarea>
        </div>
        <div>
          <button onClick={this.addComment}>Add comment</button>
          <ul>
            {this.state.comment.map((item, index) => (
              <li key={index.toString()}>{item}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Comp1;
