import { useState } from "react"

import "./App.css"
import "./index.css"
import ComplexState from "./ComplexState"

function App() {
  const [inputValue, setInputValue] = useState("Hello")

  let onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
    <>
      {/* <input placeholder="enter something..." onChange={onChange} />
      {inputValue} */}
      <ComplexState />
    </>
  )
}

export default App
