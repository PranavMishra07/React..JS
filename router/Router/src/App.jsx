import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
//import route and Routes from react router-dom
// Route return two = path ,element
// path mai koi bhi name de sakte hai isse url banegi
//Element mai component ko call karenge