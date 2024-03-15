import { Link } from "react-router-dom";
function Header()
{
return(
<div>
<Link to="Post">Post</Link><br></br>
<Link to="/Delete">Delete</Link><br></br>
<Link to="/Get">Get</Link><br></br>
<Link to="/contact">Contact Page</Link><br></br>
</div>
)
}
export default Header
