class App extends React.Component {
  state = { numebr1: 0, numebr2: 0 };
  handleAdd = () => {
    this.setState({
      numebr2: this.state.numebr2 + 1,
    });
    console.log(this.state.numebr2 + "w metodzie handleclick");
  };

  handleAddThree = () => {
    this.setState({
      numebr1: this.state.numebr1 + 1,
    });
    this.setState((prevstate) => {
      return {
        numebr1: prevstate.numebr1 + 1,
      };
    });
    this.setState((prevstate) => {
      return { numebr1: prevstate.numebr1 + 1 };
    });
    this.setState((prevstate) => {
      return { numebr1: prevstate.numebr1 + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleAddThree}>+4</button>
        <h1>{this.state.numebr1}</h1>
        <h1>{this.state.numebr2}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
