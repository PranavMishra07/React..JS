import Child3 from "./Child3"
function Child2(props) {
    let { fname } = props        //this is destructuring of 
    return (
        <>
            <h1>Child2 My name is {fname}</h1>
            <Child3 lname={fname} />
        </>
    )
}
export default Child2