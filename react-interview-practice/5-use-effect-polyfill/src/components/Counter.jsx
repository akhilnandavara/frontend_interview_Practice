import {  useState } from "react";
import UseCustomEffect from "../hooks/use-custom-effect";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  

  UseCustomEffect(() => {
    console.log("useEffect called", count);
    
    return ()=>{
        console.log("cleanup called");
    }
    
  },[count]);

//   console.log("render called", count);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>Count : {count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
