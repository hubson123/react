class App extends React.Component{
    state = {
        availableProducts: 7,
        shoppingCart:5
    }
    handleRemoveFromCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart -1
        })
    }
    handleAddictionFromCart = () =>{
        this.setState({
            shoppingCart: this.state.shoppingCart +1
        })
    }
    handleBuyProduct = () =>{
        this.setState({
            availableProducts:this.state.availableProducts - this.state.shoppingCart,
            shoppingCart: 0
        })
    }
    render() {
        const {shoppingCart,availableProducts} = this.state
        const style = shoppingCart===0 ? {
            opacity: 0.3
        }: {};
        return (
             <div>
             <button onClick={this.handleRemoveFromCart} disabled={shoppingCart ? false : true}> - </button>
             
             <span style={style}> {shoppingCart} </span>
             
             <button disabled={shoppingCart===
                availableProducts ?  true: false } onClick={this.handleAddictionFromCart}> + </button>
            {shoppingCart > 0 && <button onClick={this.handleBuyProduct}>Kup</button> }
             </div>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('root'))