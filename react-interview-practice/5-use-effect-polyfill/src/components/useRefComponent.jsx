import { useRef, useState } from "react";

export default function UseRefComponent() {
  const inputRef = useRef(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>UseRef Example</h2>
      <p>Ref : {inputRef.current}</p>
      <button onClick={() => (inputRef.current += 1)}>Increment Ref</button>
      <p>Count {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <div>
        {/* dom manipluation */}
        {/* <input type="text" ref={inputRef} /> */}
        {/* <button onClick={() => inputRef.current.focus()}>Get Result</button> */}
      </div>
    </>
  );
}
