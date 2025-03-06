import { useState } from "react"

function About() {
    let [ar, setar] = useState({
        name: "Pranav", Contact: 1234534
    })
    let [arr, setarr] = useState([
        "Himanshu", 123980, "Developer", "Bhopal", "cybrom"
    ])
    return (

        <>
            <h1>About  {ar.name} {ar.Contact} </h1>
            <h1 style={{ textAlign: "center" }}>About Array : <br />
                Name : {arr[0]} <br />
                Contact : {arr[1]} <br />
                job : {arr[2]} <br />
                City : {arr[3]} <br />
                Company : {arr[4]} <br />
            </h1>
            <button onClick={() => setarr([arr[0] = "Raman", arr[1] = 8389089, arr[2] = "Ui", arr[3] = "Betul", arr[4] = "Cymbrom"])}>Change Data</button>
            <button onClick={() => { setar({ name: "Aman", Contact: "789898" }) }}>Change Data Obj</button>
        </>
    )
}
export default About