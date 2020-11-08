import React from 'react';

class LifeCycle1 extends React.Component {
  constructor() {
    super();
  }

  buttonHandler = () => {
    console.log('work');
  };

  render() {
    console.log('render 1');
    return (
      <>
        {console.log('render 2')}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div></div>
      </>
    );
  }
}

export default LifeCycle1;
