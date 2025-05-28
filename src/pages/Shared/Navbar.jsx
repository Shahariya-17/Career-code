import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import logoImage from '../../assets/logo/logo.jpg'

const Navbar = () => {

  const {user, signOutUser} = use(AuthContext);

  const handleSignOut = () =>{
    signOutUser()
    .then(() =>{
      console.log('Signed out user')
    })
    .catch(error =>{
      console.log(error)
    })
  }

    const links = <>
    
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/'>Home</NavLink></li>
     
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <img className="w-[80px]" src={logoImage} alt="" />
        <a className=" hidden md:flex text-sky-500 text-4xl font-bold">Career Code</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {
          user? <button onClick={handleSignOut} className="btn btn-neutral btn-outline">Sign Out</button>:
          <>
          <NavLink className="btn btn-primary" to='/register'>Register</NavLink>
        <NavLink className="btn btn-accent text-white" to='/signin'>SignIn</NavLink>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
