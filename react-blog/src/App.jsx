
import { useState } from "react";
import Counter from "./coiunter";

function App(){
  const [Fruit , setFruit] = useState("Apple");

  function handleFruit(){
    setFruit("banana")
  }

  return(
    <>
    <div>

      <h1>State in React JS</h1>

      <h1>{Fruit}</h1>

      <button onClick={handleFruit}> change fruit </button>

      <Counter/>
    </div>
    
    </>
  )
}

export default App
