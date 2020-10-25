import React from "react";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calckRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements["count-currency"].value;
    let typeCurrency = elements["type-currency"].value;
    this.setState({
      result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2),
    });
  };

  //получаем данніе из пропс а не из стате, можно и из стата
  render() {
    return (
      <div className="Калькулятор">
        <h3>Калькулятор обмена</h3>
        <form onSubmit={this.calckRate}>
          <input type="number" defaultValue="150" name="count-currency" />

          <select name="type-currency" id="">
            {Object.keys(this.props.rate).map((keyName, i) => (
              <option key={keyName} value={keyName}>
                {keyName}
              </option>
            ))}
          </select>
          <input type="submit" defaultValue="calc" />
        </form>
        <div>
          <h4>Результат</h4>
          <p>EUR {this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default Calc;
