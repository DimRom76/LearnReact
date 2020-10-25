import React from "react";
import Calc from "./Calc";

class currencyExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      curencyRate: {},
    };
    this.currency = ["USD", "RUB", "PLN"];
    this.getRate();
  }

  getRate() {
    fetch("https://api.exchangeratesapi.io/latest")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        // console.log(result);
        this.setState({ curencyRate: result });
      });
  }

  render() {
    return (
      <div>
        <h1>Курсы валют</h1>
        {Object.keys(this.state.curencyRate).map((keyName, i) => (
          <div className="block" key={keyName}>
            <div>{keyName}</div>
            <div className="currency-in">{this.state.curencyRate[keyName]}</div>
          </div>
        ))}

        <Calc rate={this.state.curencyRate} />
      </div>
    );
  }
}

export default currencyExchange;
