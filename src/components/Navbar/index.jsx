import { NavLink } from "react-router-dom";
import './styles.css'

function Navbar() {
    return(
        <div className="container">
            <h1>CONTEXT</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;