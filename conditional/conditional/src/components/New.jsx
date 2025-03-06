import { useState } from "react"

function Neww() {
    let [st, setSt] = useState(true)
    let [count, setCount] = useState(0)


    let decrement = () => {
        if (count != 0) {
            setCount(count - 1)
        }
    }


    return (
        <>
            {st ? <h1>Welcome</h1> : ""}



            <button onClick={() => setSt(false)}>Hide</button>
            <button onClick={() => setSt(true)}>Show</button>

            <button onClick={() => setSt(!st)}>{st ? "hide" : "show"}</button>

            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>




        </>
    )
}
export default Neww