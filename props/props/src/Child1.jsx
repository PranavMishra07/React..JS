// props" is short for "properties". Props are a way to pass data from one component to another, usually from a parent component to a child component. They are immutable, meaning once the data is passed, the receiving component cannot modify it.

import Child2 from "./Child2"
function Child1(props) {
    return (
        <>
            <h1>my name is {props.name}</h1>
            <Child2 name="dinesh" />

        </>
    )
}
export default Child1