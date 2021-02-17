class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "no fajne",
    isLoved: true,
    number: "2",
  };
  handleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({ [e.target.name]: e.target.checked });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  render() {
    return (
      <form>
        <label>
          Podaj miasto:
          <input
            name="city"
            type="text"
            onChange={this.handleChange}
            value={this.state.city}
          />
        </label>
        <br />
        <label>
          Napisz cos o mieście:
          <textarea
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            name="isLoved"
            onChange={this.handleChange}
            checked={this.state.isLoved}
            type="checkbox"
          />
        </label>
        <label>
          Ile razy byliście w tym mieście?
          <select
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="more">Więcej</option>{" "}
          </select>
        </label>
        <button>Zapisz się</button>
      </form>
    );
  }
}
ReactDOM.render(<Form />, document.getElementById("root"));
