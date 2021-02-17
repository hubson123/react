//console.log(React);
//console.log(ReactDOM);
/* const header = <h1 className="title">Witaj na stronie!</h1>
const classBig = "big";
const handleClick = () => alert('udało sie klik!')
const main =(
    <div>
        <h1 person="osoby" onClick={handleClick} className="red">Pierwszy artykuł</h1>
        <p>Lorem Ipsum is simply
             dummy text of the 
             printing and typesetting
              industry. Lorem Ipsum has been the
               industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
)
const tekst = "stopkdad";
const largeTxt = "duzo udzo dhdhosdho o vojo dsoids isd v sdiovdsi";
const footer = (
<footer>
    {largeTxt}
    <p className={classBig}>{tekst}</p>
</footer>)
const app = [header,main,footer]
ReactDOM.render(app, document.getElementById('root')) 

const Header = () =>{
    return <h1>Witaj na stronie!</h1>
} 

const App = () => {
    return (
        <div>
            <Header />
      <App2 />
        </div>
      
    )
}
class App2 extends React.Component{
    state = {
        number: 0,

    }
    render(){
        return(
            <section>
                <h2>komponennt klasowy {this.state.number}</h2>
            </section>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('root'))
class SHoppingList extends React.Component{
    state = {
        items1: 'ogórki',
        items2: 'cola',
        items3: 'piwko'
    }
render() {
    return (
        <div>
        <h1>Lista:</h1>
        <ol>
        <ItemList example={2+2} name={this.state.items1} />
        <ItemList name="ele 2" />
        <ItemList name="ele 3" />
        </ol>
        </div>
    )
}
}
class ItemList extends React.Component{
render() {
    return (
      <li>{this.props.name} {this.props.example}</li>   
    );
}
} 
ReactDOM.render(<SHoppingList />,document.getElementById('root')) */

class Appsa extends React.Component {
  state = {
    value: "",
  };
  handleInputChange = (e) => {
    console.log("Zawartość w evencie: " + e.target.value);
    console.log("Zawartość przed setState: " + this.state.value);
    this.setState({
      value: e.target.value,
    });
    console.log("Zawartość po setState: " + this.state.value);
  };
  handleClick = () => {
    this.setState({
      value: "",
    });
  };
  render() {
    console.log("Zawartosc value w render" + this.state.value);
    return (
      <>
        <input
          placeholder="wpisz..."
          value={this.state.value}
          onChange={this.handleInputChange}
          type="text"
        />
        <button onClick={this.handleClick}>Reset</button>
        <h2 className="title">{this.state.value.toUpperCase()}</h2>
      </>
    );
  }
}
ReactDOM.render(<Appsa />, document.getElementById("root"));
