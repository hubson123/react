class App extends React.Component {
  state = {
    items: [
      { id: 1, txt: "ziemniak", active: false },
      { id: 2, txt: "jabłko", active: false },
      { id: 3, txt: "orzechy", active: false },
      { id: 4, txt: "kasza", active: false },
      { id: 5, txt: "chleb", active: false },
      { id: 6, txt: "gruszka", active: true },
    ],
  };
  handleChangeStatus = (id) => {
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems
          changeStatus={this.handleChangeStatus}
          items={this.state.items}
        />
      </>
    );
  }
}
