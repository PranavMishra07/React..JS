import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import './app.css'
import Hero from "./Hero"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hero" element={<Hero />} />

      </Routes>
    </>
  )
}

export default App
//import route and Routes from react router-dom
// Route return two = path ,element
// path mai koi bhi name de sakte hai isse url banegi
//Element mai component ko call karenge