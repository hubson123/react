class Apka extends React.Component{
 state = {
          text: ""
      } 

    handleClick = () => {
    const number = Math.floor(Math.random() * 10)
        this.setState({
            text: this.state.text + number
  })  }
    render() {
        const btnName = "stwórz liczbę"
        return (<>
             <button onClick={this.handleClick}>{btnName}</button>
       <PanelResult text={this.state.text} /> </>
        );
    }
}
const PanelResult = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}
ReactDOM.render(<Apka btnTitle="dodaj cyfrę" />,document.getElementById('root'))