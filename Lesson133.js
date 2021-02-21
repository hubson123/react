const App = () => {
    const [text,setText] = React.useState('');
    const handleClick = () =>{
        setText(text+'a');
    }
    return ( <div>
        <button onClick={handleClick}>Dodaj A</button>
        <h3>{text}</h3>
    </div> );
}
 
ReactDOM.render(<App />,document.getElementById('root'))