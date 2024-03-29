// import { Link } from "react-router-dom";
// function Header()
// {
// return(
// <div>
 
// <Link to="Post">Post</Link><br></br>
// <Link to="/Delete">Delete</Link><br></br>
// <Link to="/Get">Get</Link><br></br>
// <Link to="/contact">Contact Page</Link><br></br>
// </div>
// )
// }
// export default Header





import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <div className='logo-hcl'><h1>Logo</h1></div>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
        <li> <Link to="/">Home</Link><br></br></li>
        <li> <Link to="Post">Post</Link><br></br></li>
        <li> <Link to="Put">Update</Link><br></br></li>
        <li> <Link to="/Delete">Delete</Link><br></br></li>
        <li> <Link to="/Get">Get</Link><br></br></li>
        <li> <Link to="/Patch">Patch</Link><br></br></li>

        <li> <Link to="/FileUp">Post Upload</Link><br></br></li>

        </ul>
      </nav>
    </div>
    </Container>
  );
}

export default Header
