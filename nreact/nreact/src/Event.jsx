const Event = () => {
    let fun = () => {
        alert("Working Event Function")
    }
    let dblfun = () => {
        alert("Dblclick Working")
    }
    return (

        <>
            <h1>Event Component</h1>
            <button onClick={fun}>Click</button>
            <button onDoubleClick={dblfun}>DBLClick</button>
            <button onMouseEnter={fun}>onMouseEnter</button>
            <button onMouseLeave={fun}>Onmouseleave</button>
            <button onMouseOut={fun}>OnmouseOut</button>
        </>
    )
}
export default Event