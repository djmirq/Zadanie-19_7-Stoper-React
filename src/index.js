import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miliseconds: 0,
      interval: 10,
      memoryList: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1 id="root">{this.getTime()}</h1>
        <nav className="controls">
          <button
            type="button"
            href="#"
            className="button btn btn-success btn-sm m2"
            id="start"
            onClick={() => this.handleStartClick()}
          >
            Start
          </button>
          <button
            type="button"
            href="#"
            className="button btn btn-dark btn-sm m2"
            id="stop"
            onClick={() => this.handleStopClick()}
          >
            Stop
          </button>
          <button
            type="button"
            href="#"
            className="button btn btn-warning btn-sm m2"
            id="reset"
            onClick={() => this.handleResetClick()}
          >
            Reset
          </button>
          <button
            type="button"
            href="#"
            className="button btn btn-primary btn-sm m2"
            id="memory"
            onClick={() => this.handleMemoryClick()}
          >
            Memory
          </button>
          <button
            type="button"
            href="#"
            className="button btn btn-danger btn-sm m2"
            id="resetMemory"
            onClick={() => this.handleResetMemoryClick()}
          >
            Reset Memory
          </button>
        </nav>
        <ul className="results">
          {this.state.memoryList.map(mem => (
            <li key={mem[0]}>{mem[1]}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getTime = () => {
    return (
      ("0" + Math.floor((this.state.miliseconds / 1000 / 60) << 0)).slice(-2) +
      ":" +
      ("0" + Math.floor((this.state.miliseconds / 1000) % 60)).slice(-2) +
      ":" +
      ("0" + Math.round(this.state.miliseconds / 10)).slice(-2)
    );
  };

  step = () => {
    this.setState({
      miliseconds: this.state.miliseconds + this.state.interval
    });
  };

  handleStartClick = () => {
    clearInterval(this.incrementer);
    this.incrementer = setInterval(() => this.step(), this.state.interval);
  };

  handleStopClick = () => {
    clearInterval(this.incrementer);
  };

  handleResetClick = () => {
    this.setState({
      miliseconds: 0
    });
  };

  handleMemoryClick = () => {
    this.setState({
      //   memoryList: [
      //     ...this.state.memoryList,
      //     ...[[this.state.memoryList.length + 1, this.getTime()]]
      //   ]
      // });
      memoryList: this.state.memoryList.concat([
        [this.state.memoryList.length + 1, this.getTime()]
      ])
    });
  };

  handleResetMemoryClick = () => {
    this.setState({
      memoryList: []
    });
  };
}

ReactDOM.render(<Stopwatch />, document.getElementById("root"));
