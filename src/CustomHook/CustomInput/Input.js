import React,{useState} from 'react'
import useInput from "./useInput";

const Input = () => {
  const [FirstName, resetFirstName, bindFirstName ] = useInput("")
  const [LastName, resetLastName, bindLastName] = useInput("")

  const handleSubmit= (e) => {
    e.preventDefault()
    alert(`Hello ${FirstName} ${LastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
        <h2>Input</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" {...bindFirstName} /><br/>
          <input type="text" placeholder="Last Name" {...bindLastName} /><br/><br/>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Input