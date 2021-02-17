/*const PositiveMessage = () => <p>Możesz obejrzeć film!</p>
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu - nie masz 16 lat.</p>
*/
/*const displayMessage = (isFormSubmitted,isConfirmed) => {
    if(isFormSubmitted){
    if(isConfirmed){
      return  <ValidationMessage txt="Walidacja przebiegła pomyślnie. Zapraszamy!"/>
    }
    else {
        return <ValidationMessage txt="Nie możesz kupić biletu."/>
    }
    }else{return null}
}*/
const ValidationMessage = (props) => 
{ const {txt} = props
return<p>{txt}</p>}

const OrderForm = (props) =>{
const {change,submit,confirm} = props
    return(
    <form onSubmit={submit}><input type="checkbox" 
    onChange={change} id="age" checked={confirm} />
    <label htmlFor="age">Mam co najmniej 16 lat.</label>
    <br />
    <button>Kup bilet</button>
    </form>
)}

class TicketSHop extends React.Component{
state = {
    isConfirmed: false,
    isFormSubmitted: false
}
handleChange = () => {
    this.setState({
        isConfirmed: !this.state.isConfirmed,
        isFormSubmitted: false
    })
}
displayMessage = () => {
    if(this.state.isFormSubmitted){
    if(this.state.isConfirmed){
      return  <ValidationMessage txt="Walidacja przebiegła pomyślnie. Zapraszamy!"/>
    }
    else {
        return <ValidationMessage txt="Nie możesz kupić biletu."/>
    }
    }else{return null}}
handleFormSubmit = (e) => {
  e.preventDefault()
  if(!this.state.isFormSubmitted){
    this.setState({
        isFormSubmitted: true

    })
  }
 
}
    render() {  
        return (<>
             <h1>Kup bilet na horror roku!</h1>
             <OrderForm change={this.handleChange} submit={
                 this.handleFormSubmit} confirm={this.state.isConfirmed} />
           {this.displayMessage()}
        </>);
        
    }

}
ReactDOM.render(<TicketSHop />,document.getElementById('root'))