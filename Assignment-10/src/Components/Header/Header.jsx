import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">Home</Link>
              <Link to="/allrecipe" className="ml-2">
                All Recipe
              </Link>
              <Link to="/about" className="px-3">
                About
              </Link>
              <Link to="/blog" className="px-3">
                Blog
              </Link>
              <div>
            <Link
              to="/login"
              className=" mx-2 "
            >
              Login
            </Link>

            <Link
              to="/register"
              className=" mx-2"
            >
              Register
            </Link>
          </div>
            </ul>
          </div>
          <Link to='/' className="flex items-center">
            <img className="w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqhoU8xaD0lYRs_DqnTIKIrxnY6Ap2kyw0g&usqp=CAU" alt="" />
            <h4 className="font-bold ml-3">Super Recipe</h4>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link to="/">Home</Link>
            <Link to="/allrecipe" className="ml-2">
              All Recipe
            </Link>
            <Link to="/about" className="px-3">
              About
            </Link>
            <Link to="/blog" className="px-3">
              Blog
            </Link>
            <div>
            <Link
              to="/login"
              className=" mx-2 "
            >
              Login
            </Link>

            <Link
              to="/register"
              className=" mx-2"
            >
              Register
            </Link>
          </div>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
