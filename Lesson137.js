const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [isActive, setisActive] = React.useState(true);
  const handleClick = () => setCounter((prev) => prev + 1);
  const toggleVisibilityCounter = () => {
    setisActive((pre) => !pre);
  };
  const counterComponent = isActive ? <Counter rerenderCounter={counter} />:null;
  return (
    <div>
      <button onClick={toggleVisibilityCounter}>Pokaż/ukryj komponent</button>{" "}
      <button onClick={handleClick}>Przerenderuj komponent</button>
   {counterComponent}
    </div>
  );
};
const Counter = ({rerenderCounter}) => {
  const [counter, setCounter] = React.useState(0);
  const handleMouseMove = (e) => {
    setCounter(e.clientX);
  };
  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
return ()=>{
    alert('Odmontowano');
    window.removeEventListener("mousemove", handleMouseMove);
}

}, []);
  return (
    <div>
      <p>{counter}</p>
      {
        <p>{rerenderCounter}</p>
      }
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
