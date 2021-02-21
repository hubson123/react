const App = () => {
    const [value,setValue]=React.useState('');
    const handleChangeText = (e) =>{
       setValue(e.target.value)
    }
    const handleClick = () =>{
        setValue('')
    }
    return ( <div>
    <input 
    value={value} 
    placeholder="Wpisz.." 
    onChange={handleChangeText} type="text" />
    <button onClick={handleClick}>Reset</button>
    </div> );
}
 
ReactDOM.render(<App />,document.getElementById('root'));