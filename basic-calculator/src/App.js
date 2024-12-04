import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
    afterInput();
  }; 
 
  function minus(e) { 
      e.preventDefault();
      setResult((result) => result - Number(inputRef.current.value));
      afterInput();
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    afterInput();
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    afterInput();
  };
 
  function resetInput(e) { 
    e.preventDefault();  
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0);
  }; 

  function afterInput(){
    setTimeout(() => {inputRef.current.value=""}, 0);
    document.getElementById("inputField").focus();
  }
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <h2 ref={resultRef}> 
          {result} 
        </h2>
        <input
          id="inputField"
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>+</button> 
        <button onClick={minus}>-</button>
        <button onClick={times}>x</button>
        <button onClick={divide}>/</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App;