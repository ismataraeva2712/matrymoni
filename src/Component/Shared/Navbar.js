import React,  { useEffect, useState } from 'react';
import logo from '../../img/logo.png'
import logo1 from '../../img/logo1.png'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  
     const menuItem=<>
        <li><Link to='/'>Home</Link></li>
       
        <li><Link to='/blog'>Blogs</Link></li>
       
       
        
        <li>{user? <p onClick={ logout}>Sign Out</p>:<Link to='/login'>Login</Link>}</li>
        </>
    return (
        <div>
            <div class="navbar bg-primary px-12 mx-auto text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-neutral">
        {menuItem}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">   <img src={logo1} alt="" /></a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;