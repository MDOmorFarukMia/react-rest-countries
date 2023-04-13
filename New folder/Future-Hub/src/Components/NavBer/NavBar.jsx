import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink  to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Home
                   
                  </NavLink></li>
                        <li><NavLink  to='/statistics'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Statistics
                   
                  </NavLink></li>
                  <li><NavLink  to='/applied-jobs'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Applied Jobs
                   
                  </NavLink></li>
                  <li><NavLink  to='/blogs'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Blog
                   
                  </NavLink></li>
                       
                    </ul>
                </div>
                <NavLink  to='/' className="btn btn-ghost normal-case font-mono text-2xl text-violet-900">Job Network</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink  to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Home
                   
                  </NavLink></li>
                <li><NavLink  to='/statistics'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Statistics
                   
                  </NavLink></li>
                  <li><NavLink  to='/applied-jobs'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Applied Jobs
                   
                  </NavLink></li>
                  <li><NavLink  to='/blogs'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >Blog
                   
                  </NavLink></li>
                </ul>
            </div>
            <div className="navbar-end p-6 ">
                <a className="text-md btn border-none bg-gradient-to-r from-violet-500 to-blue-500 hover:from-rose-600 hover:to-orange-600">Start Applying</a>
            </div>
        </div>

    );
};

export default NavBar;