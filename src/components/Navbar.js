import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-indigo-700 shadow-md">
      <Link to="/" className="text-white font-bold text-xl">
        Home
      </Link>
      <div className="flex items-center">
        <Link to="/about" className="text-white mr-4 hover:text-indigo-400">
          About
        </Link>
        <Link to="/news" className="text-white hover:text-indigo-400">
          News
        </Link>
        <Link to="/login">
          {" "}
          <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-full ml-4">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
