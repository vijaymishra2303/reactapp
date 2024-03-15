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
import { Link } from "react-router-dom";
import './Menu.css'; // Import CSS file for styling

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
        <Link to="Post">Post</Link><br></br>
<Link to="/Delete">Delete</Link><br></br>
<Link to="/Get">Get</Link><br></br>
<Link to="/contact">Contact Page</Link><br></br>
        </ul>
      </nav>
    </div>
  );
}

export default Header
