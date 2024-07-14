import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [userData,setUserData]=useState({
    firstName:'',
    lastName:'',

  })
  const handleOnChange=(e)=>{
   setUserData({
    ...userData,[e.target.name]:e.target.value
   })

  }

  return (
    <>

    <Counter/>
     <form onSubmit={(e)=>{
      e.preventDefault()
      console.log(userData)
     }}>
      <input type="text" name='firstName' onChange={handleOnChange} />
      <input type="text" name='lastName' onChange={handleOnChange}/>
      <button>Submit</button>
     </form>
    </>
  )
}

export default App
