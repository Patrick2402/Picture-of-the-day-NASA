import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
<div className="navbar">

<span>
<img className="nasa-pic" src="https://img.icons8.com/color/50/000000/nasa.png" alt="Nasa Logo"/>
<h1>Nasa pictures</h1>
</span>

<div className="links">
    <Link to="/">Home</Link>
    <Link to="/pic">Picture of the day</Link>
    <Link to="/support">Support</Link>
    <Link to="/">Something</Link>
</div>

</div>

 );
}
 
export default Navbar;