const Omen = (props) => {
  <div>
    {" "}
    <h2>Oto Twoja wróżba: </h2>
    <p>{props.name}</p>{" "}
  </div>;
};

class Wrozba extends React.Component {
  state = {
    omens: ["Pierwsza wróżba", "Druga wróżba", "Trzecia wróżba"],
    option: null,
    value: "",
  };

  handleClickSee = () => {
    const number = Math.floor(Math.random() * this.state.omens.length);
    console.log(number);
    this.setState({
      option: this.state.omens[number],
    });
  };
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClickAdd = () => {
    if (this.state.value === "") return alert("wpisz coś");
    const omens = [...this.state.omens];
    omens.push(this.state.value);
    this.setState({
      omens,
      value: "",
    });
    alert(`Wróżba dodana. Aktualne wróżby ${omens}`);
  };
  render() {
    return (
      <>
        <button onClick={this.handleClickSee}>Zobacz wróżbę</button>
        <br />
        {this.state.option ? <h1>{this.state.option}</h1> : null}
        <input
          value={this.state.value}
          onChange={this.handleInputChange}
          type="text"
        />{" "}
        <br />
        <button onClick={this.handleClickAdd}>Dodaj wróżbę</button>
      </>
    );
  }
}

ReactDOM.render(<Wrozba />, document.getElementById("root"));
