import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav>
                <h1>LOGO</h1>
                <ul>
                    <li><Link to={"/"}>Home</Link> </li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/hero"}>Hero</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar