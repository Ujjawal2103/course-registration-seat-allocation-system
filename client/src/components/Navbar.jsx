import { Link } from "react-router-dom";

function Navbar(){

return(

<nav>

<h2>Course Registration System</h2>

<Link to="/">Login</Link>

<Link to="/register">Register</Link>

<Link to="/courses">Courses</Link>

<Link to="/dashboard">Dashboard</Link>

</nav>

);

}

export default Navbar;