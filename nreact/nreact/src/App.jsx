import Child1 from "./child1"
import Event from "./Event"

function App() {
  let name = "pranav"
  let Employ = {
    name: "Himanshu",
    Id: 233,
    position: "Developer",
    City: "Bhopal"
  }
  let arr = ["Lokesh", "Khandwa", 123, "NMV Collage", "c++", "Cricket",]
  return (

    <>
      <h1>Welcome {name}</h1>
      <h1>My name is {Employ.name} my employ id {Employ.Id} i am a {Employ.position} from {Employ.City} </h1>
      <h1>Name :{arr[0]} </h1>
      <h2>City :{arr[1]} </h2>
      <h2>Mo no :{arr[2]} </h2>
      <h2>Collage name :{arr[3]} </h2>
      <h2>Learning :{arr[4]} </h2>
      <h2>Hobby :{arr[5]} </h2>
      <h2> :{arr[6]} </h2>
      <Event />
      <Child1 name="vikash" />
    </>
  )
}
export default App