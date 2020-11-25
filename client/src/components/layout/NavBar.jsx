import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <Link to="/" className="navbar-brand">
          <h3>Todo App</h3>
        </Link>
        <NavItems />
      </nav>
    </>
  );
};

export default NavBar;
