import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <Link to="/signin" className="nav-link">
        Log out
      </Link>
      <Link to="/signup" className="nav-link">
        Sign up
      </Link>
      <Link to="/signin" className="nav-link">
        Sign in
      </Link>
    </>
  );
};

export default NavItems;
