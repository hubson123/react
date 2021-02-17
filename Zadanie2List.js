const Person = (props) => (
  <>
    <li>{props.name}</li> <button onClick={props.delete}>Usun</button>
  </>
);
class App extends React.Component {
  state = {
    person: [
      { id: 1, name: "Jan K." },
      { id: 2, name: "Irena Z." },
      { id: 3, name: "Adam S." },
      { id: 4, name: "Bartłomiej Ł." },
    ],
  };
  handleDeletePerson = (id) => {
    const person = [...this.state.person];
    const index = person.findIndex((person) => person.id === id);
    person.splice(index, 1);
    this.setState({
      person,
    });
  };
  render() {
    return (
      <ul>
        {this.state.person.map((per) => (
          <Person
            key={per.id}
            name={per.name}
            delete={this.handleDeletePerson}
          />
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
