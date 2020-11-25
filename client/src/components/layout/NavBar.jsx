import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";


const NavBar = () => {
 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/" className="navbar-brand">
          <h3 className='text-light'>Todo App</h3>
        </Link>
    

        <NavItems />
      
      </nav>
    </>
  );
};

export default NavBar;
