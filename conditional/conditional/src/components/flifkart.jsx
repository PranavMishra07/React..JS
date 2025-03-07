import { useState } from "react"
function Flifkart() {
    <img src="src/components/1.jpeg" alt="" id="show" />
    let { mouse, setMouse } = useState(true)

    function Showimg() {
        if (mouse == true) {
            setMouse(false)
        }
    }

    return (
        <>
            <div className="main">
                <div className="collag">
                    <img src="src/components/2.jpeg" alt="" onMouseEnter={ } />
                    <img src="src/components/3.jpeg" alt="" />
                    <img src="src/components/4.jpeg" alt="" />
                </div>
                <div className="side">
                    {mouse ? <img src="src/components/1.jpeg" alt="" id="show" /> : ""}
                </div>
            </div>
        </>
    )
}
export default Flifkart