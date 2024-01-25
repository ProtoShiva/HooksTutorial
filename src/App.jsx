import { useState } from "react"

import "./App.css"

function App() {
  const [inputValue, setInputValue] = useState("Hello")

  let onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
    <>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </>
  )
}

export default App
