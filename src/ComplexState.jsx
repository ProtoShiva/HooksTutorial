import React from "react"
import { useState } from "react"

function ComplexState() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  })

  const updateName = (evt) => {
    const { name, value } = evt.target
    setFullName((val) => {
      return {
        ...val,
        [name]: value
      }
    })
  }
  return (
    <>
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateName}
          placeholder="First Name"
          // value={fullName.fName}
        />
        <input
          name="lName"
          onChange={updateName}
          placeholder="Last Name"
          // value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default ComplexState
