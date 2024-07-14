import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import UseRefComponent from "./components/useRefComponent";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
  });
  const handleOnChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Form Task */}
      <h2>Form Task</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        <input type="text" name="firstName" onChange={handleOnChange} />
        <input type="text" name="lastName" onChange={handleOnChange} />
        <button>Submit</button>
      </form>
      <Counter />
      <UseRefComponent />
    </>
  );
}

export default App;
