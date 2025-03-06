import Child2 from "./Child2"
function Child1({ name }) {
    return (

        <>
            <h1>Child1 My name is  {name}</h1>
            <Child2 fname={name} />
        </>
    )
}
export default Child1