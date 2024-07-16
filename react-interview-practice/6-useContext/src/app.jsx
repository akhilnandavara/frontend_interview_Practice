import { useContext, useState } from 'preact/hooks'
import './app.css'
import { createContext } from 'preact'

const UserDataContext=createContext(null)
export function App() {
  const data1="Hello From Grand Parent"

  return (
    <>
    <UserDataContext.Provider value={{data1}}>
    <h1>Hello, World!</h1>
      <GrandParent />
    </UserDataContext.Provider>
    </>
  )
}


const GrandParent = () => {
  
  return (
    <div>
      <Parent  />
    </div>
  )
}

const Parent=()=>{
  return (
    <div>
      <Child />
    </div>
  )
}

const Child=({data})=>{
  return (
    <div>
      <GrandChild data={data} />
    </div>
  )
}

const GrandChild=()=>{
  const {data1}=useContext(UserDataContext)
  return (
    <div>
      <h1> value is  : {data1}</h1>
    </div>
  )
}