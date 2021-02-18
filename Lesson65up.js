class App extends React.Component {
  state = { active: true };
  handleClick = () => {
    this.setState((state) => ({
      active: !state.active,
    }));
  };
  render() {
    return (
      <div>
        {this.state.active && <Clock />}
        <SwitchButton active={this.state.active} click={this.handleClick} />
      </div>
    );
  }
}
const SwitchButton = (props) => (
  <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
);
class Clock extends React.Component {
  index = "";
  state = {
    time: this.getTime(),
  };
  componentDidMount() {
    this.index = setInterval(this.setTime.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.index);
  }
  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
  }
  setTime() {
    const time = this.getTime();
    this.setState({
      time,
    });
  }
  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <>
        {hours > 9 ? hours : `0${hours}`} :{" "}
        {minutes > 9 ? minutes : `0${minutes}`} :{" "}
        {seconds > 9 ? seconds : `0${seconds}`}
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
