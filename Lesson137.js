
const App = () => {
    const [counter,setCounter] = React.useState(0);
    const handleClick = () =>(setCounter(prev =>prev+1))
    return ( <div onClick={handleClick}>
<h5>Hi counter</h5>
{counter}    </div> );
}
 
ReactDOM.render(<App />,document.getElementById('root'));