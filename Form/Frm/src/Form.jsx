import { useState } from "react"
function Form() {
    let [frmdata, setFrmdata] = useState({
        username: "", age: "", contact: ""
    })
    function Inputvalue(e) {
        const { name, value } = e.target
        setFrmdata({ ...frmdata, [name]: value })
    }
    return (
        <>
            <form action="">
                <h1>name{username}</h1>
                <h1>age{age}</h1>
                <label htmlFor="">name</label>
                <input type="text" name="username" onChange={Inputvalue} /> <br /><br />
                <label htmlFor="">age</label>
                <input type="text" name="age" onChange={Inputvalue} /> <br /><br />
            </form>
        </>
    )
}
export default Form