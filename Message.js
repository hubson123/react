class Message extends React.Component{
constructor(props){
    super(props);
this.state = {
    messageIsActive: false
}
}
handleMessageButton() {
    this.setState({
        messageIsActive: !this.state.messageIsActive
    })
}
    render() {
    const text= 'lorem jdijfd jdiohv iohio hh fioh fiodhh dihdfdiofhdodoi hdiodhd'
    return (
         <>
         <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}</button>
         {this.state.messageIsActive && <p>{text}</p>}
         
         </>
    );
}
}
class Counter extends React.Component{
    state = {
        count: 0,
        result: this.props.result
    }
    handleMathClick = (type,number = 1) =>{
        if(type === "substraction"){
            this.setState(prevState => ({
                count: prevState.count+1,
                result: prevState.result - number
            }))
        }
        else if(type === "reset"){
            this.setState(prevState =>(
              { count: prevState.count + 1,
                result: 0  
              }))
        }else if(type === "add"){
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        }
    }
    render() {
        return (
             <>
             <MathButton name="-10" number="10" type="substraction" click={this.handleMathClick} />
             <MathButton name="-1" number="1" type="substraction" click={this.handleMathClick} />
             <MathButton name="+1" number="1" type="add" click={this.handleMathClick} />
             <MathButton name="+10" number="10" type="add" click={this.handleMathClick} />
             <MathButton name="Reset" number="0" type="reset" click={this.handleMathClick} />
             <ResultPanel count={this.state.count} result={this.state.result} />
             </>
        );
    }
}
const MathButton = (props) => {
    const numw = parseInt(props.number)
    return(<button onClick={() => props.click(props.type,numw)}>{props.name}</button>
    )}
    const ResultPanel = (props) => {
        return(
            <><h1>Liczba kliknięć: {props.count} {props.count>10 ? 
            <span>Przeciążenie procka</span>: null}</h1>
             <h1>Wynik: {props.result}</h1></>
            )}
ReactDOM.render(<Counter result = {0} />,document.getElementById('root'))