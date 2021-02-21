const Counter = (props) => {
    const [count,setCount]=React.useState(0);
    const [result,setResult]=React.useState(props.result);
   const handleMathClick = (type,number=1) =>{
       if(type === "sub"){
           console.log('minus');
           setCount(count+1);
           setResult(result - number);
       }else if(type === "Reset"){
        setCount(count+1);
           setResult(props.result);
       }
       else if(type==="add"){
        setCount(count+1);
           setResult(result  + number);
       }
   };
   return ( <>
<MathButton name="-10" number="10"
type="sub" click={handleMathClick} />
<MathButton name="-1" number="1"
type="sub" click={handleMathClick} />
<MathButton name="10" number="10"
type="add" click={handleMathClick} />
<MathButton name="1" number="1"
type="add" click={handleMathClick} />
<MathButton name="Reset" 
type="Reset" click={handleMathClick} />
<ResultPanel count={count} result={result} />
    </> );
}
const MathButton = (props) =>{
const number = parseInt(props.number);
return(
    <button onClick={()=> props.click(props.type, number)}>{props.name}</button>
)
}
const ResultPanel = (props) =>{
    return(
        <>
        <h2>Licznik kliknięć: {props.count}{props.count> 10 ? <span>Przeciążenie procesora</span>: null}</h2>
        <h2>Wynik: {props.result}</h2>
        </>
    )
}
 const startValue = 0;
ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'))