class App extends React.Component {
  state = { numebr1: 0, numebr2: 0, status: true };
  handleAdd = () => {
    this.setState({
      numebr2: this.state.numebr2 + 1,
    });
    console.log(this.state.numebr2 + "w metodzie handleclick");
  };
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("Wywołać metodę constructor");
  }
  componentWillMount() {
    console.log("Wywołać metodę WillMount");
  }
  componentDidMount() {
    console.log("Wywołać metodę DidMount");
    this.setState({
      number: 1,
    });
  }
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
  componentDidUpdate() {
    console.log("Wywołać metodę DidUpdate");
  }
  render() {
    console.log("Wywołana metoda render");
    return (
      <div>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleAddThree}>+4</button>
        <h1>{this.state.numebr1}</h1>
        <h1>{this.state.numebr2}</h1>
        <button onClick={() => this.setState({ status: !this.state.status })}>
          klik
        </button>
        <Child status={this.state.status} />
        {this.state.status && <Child2 />}
      </div>
    );
  }
}
class Child extends React.Component {
  componentDidMount() {
    console.log("Wywołać metodę DidMount w Child");
    this.setState({
      number: 1,
    });
  }
  componentDidUpdate() {
    console.log("Wywołać metodę DidUpdate w Child");
  }
  render() {
    console.log("Wywołana metoda renderw Child");
    return <div>{String(this.props.status)}</div>;
  }
}
class Child2 extends React.Component {
  componentDidMount() {
    console.log("Wywołać metodę DidMount w Child2");
    this.setState({
      number: 1,
    });
  }
  componentDidUpdate() {
    console.log("Wywołać metodę DidUpdate w Child2");
  }
  componentWillUnMount() {
    console.log("Wywołać metodę DidUpdate w Child2");
  }
  render() {
    console.log("Wywołana metoda renderw Child2");
    return (
      <>
        <div>komponent Child2 siedzi</div>;
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
