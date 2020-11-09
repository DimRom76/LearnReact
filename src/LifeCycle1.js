import React from 'react';

class LifeCycle1 extends React.Component {
  // конструктор, в котором происходит начальная инициализация компонента
  constructor(props) {
    console.clear();
    console.log('constructor');
    super();
    this.state = {
      s1: 0,
    };
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
  };

  // getDerivedStateFromProps ызывается непосредственно перед вызовом метода render, как при начальном монтировании, так и при последующих обновлениях. Он должен вернуть объект для обновления состояния или null, чтобы ничего не обновлять.
  static getDerivedStateFromProps(props, state) {
    console.log('get Derived State From Props');
    return null; //если ничего не изменилось
    // return { s1: props.arg }; использовать при необходимости
  }

  // вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.
  componentDidMount() {
    console.log('component Did Mount');
  }

  // вызывается сразу после обновления. Не вызывается при первом рендере.
  componentDidUpdate() {
    console.log('component Did Update');
  }

  //СТАРЫЕ МЕТОДЫ
  // //вызывается непосредственно перед рендерингом компонента
  // componentWillMount() {
  //   console.log('component Will Mount');
  // }

  // //вызывается перед удалением компонента из DOM
  // componentWillUnmount() {
  //   console.log('component Will Unmount');
  // }

  // рендеринг компонента
  render() {
    console.log('render 1');
    return (
      <>
        <h1>классовый компонент жизненый цикл</h1>
        {console.log('render 2')}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    );
  }
}

export default LifeCycle1;
