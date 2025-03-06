import Child3 from "./Child3"
function Child2(props) {
    return (
        <>
            <h1>My name is {props.name}</h1>
            <Child3 age="45" />
        </>
    )
}
export default Child2
