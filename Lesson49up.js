const Cash = (props) => (
  <div>
    {props.title}
    {props.cash <= 0
      ? ""
      : ((props.cash / props.ratio) * props.price).toFixed(2)}
  </div>
);
class Kantor extends React.Component {
  state = {
    amount: "",
    select: "electricity",
  };
  static defaultProps = {
    currencies: [
      { id: 1, name: "dollar", ratio: 3.6, title: "Wartość w dolcach: " },
      { id: 2, name: "euro", ratio: 4.2, title: "Wartość w euro: " },
      { id: 3, name: "pound", ratio: 5.2, title: "Wartość w funtach: " },
      { id: 4, name: "złoty", ratio: 1, title: "Wartość w złotych: " },
    ],
    prices: {
      electricity: 0.51,
      gas: 4.73,
      orange: 3.5,
    },
  };

  handleChangeNumber = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleSelectProduct = (e) => {
    this.setState({
      select: e.target.value,
    });
  };
  insertSufix = (select) => {
    if (select === "electricity") {
      return <em>kWh</em>;
    } else if (select === "gas") {
      return <em>L</em>;
    } else if (select === "orange") {
      return <em>kg</em>;
    } else return null;
  };
  selectPrice = (select) => {
    return this.props.prices[select];
  };
  render() {
    const calcy = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        cash={this.state.amount}
        ratio={currency.ratio}
        title={currency.title}
        price={this.selectPrice(this.state.select)}
      />
    ));
    return (
      <>
        <label>
          Wybierz produkt:
          <select value={this.state.select} onChange={this.handleSelectProduct}>
            <option value="gas">benzyna</option>
            <option value="orange">pomarańcza</option>
            <option value="electricity">prąd</option>
          </select>
        </label>{" "}
        <br />
        <label>
          <input
            value={this.state.amount}
            onChange={this.handleChangeNumber}
            type="number"
          />
          {this.insertSufix(this.state.select)}
        </label>
        {calcy}
      </>
    );
  }
}
ReactDOM.render(<Kantor />, document.getElementById("root"));
