import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { navBar } from "../data/data";
import {AiOutlineSearch} from "react-icons/ai"
import profile from "../images/b4.jpg";

export const Header = () => {
    const activeNavLink = ({isActive}) =>  (isActive ? "active" : "NavLink")
    return (
        <>
        <header className='fixed top-0 left-0 z-50 w-screen h-[8vh] md:shadow-lg bg-white'>
            
        {/* desktop */}
        
        <div className='hidden md:flex justify-between px-7 p-2'>
         <div className= 'logo flex'>
          
            <div>
                <img src={logo} alt='logo' width= '50px' height='50px' />
            </div>
            <h2 className='text-2xl font-semibold ml-3'>MoodFixed</h2>
         </div>
         {/*navlinks*/}

         <div className='menu'>
            <ul className='flex'>
                {navBar.map((list,i)=>(
                    <li className={`mx-5 py-2 ${activeNavLink}`} key ={i}> 
                    <NavLink to={list.path}>{list.name}</NavLink>
                    </li>
                ))}
            </ul>
         </div>
         {/* profile */}
         <div className='profile flex items-center'>
            <AiOutlineSearch size={22} />
            <a href="https://www.spotify.com/lk-en/premium/" >
            <button className="bg-primary px-6 py-1.5 text-white rounded-full mx-3">Get Premium</button>
            </a>
            <div className="img w-10 h-10 rounded-full">
              <a href="https://accounts.spotify.com/en/login">
                <img src={profile} alt="profile" className="img w-10 h-10 bg-red-300 rounded-full object-cover cursor-pointer">
                    </img>
                </a>
            </div>
         </div>

        </div>
        </header>
        </>
    )
}