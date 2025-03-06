import { use, useState } from "react"
import About from "./About"
function App() {
  let [name, setname] = useState("Devansh")
  let [contact, setcontact] = useState("1234556")
  let [city, setcity] = useState("Bhopal")
  let [age, setage] = useState(80)
  let [color, setcolor] = useState("lightblue")
  function fun() {
    setname("Cybrom")
  }
  let chgCo = () => {
    setcontact("9399093024")
  }
  let chnCity = () => {
    setcity("Betul")
  }

  return (
    <>
      <div style={{ backgroundColor: color, color: "white" }}>
        <h1>My name is {name}</h1>
        <button onClick={fun}>Click</button>
        <h1>my Contact is {contact} </h1>
        <button onClick={chgCo}>Change No </button>

        <h1>I live In {city}</h1>
        <button onClick={chnCity}>chgCity</button>


        <h1>My age is {age}</h1>
        <button onClick={() => { setage(99) }}>Change age</button>


        <button onClick={() => { setcolor('red') }}>Red</button>
        <button onClick={() => { setcolor('yellow') }}>Yellow</button>
        <button onClick={() => { setcolor('black') }}>Dark</button>

        <h1> Happy Birthday</h1>
        <button onClick={show}>Chsmg</button>
        <About />
      </div>
    </>
  )
}

export default App
