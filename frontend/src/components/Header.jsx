import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header({isScrolled}) {
  return (
    <div className={`${isScrolled ? "w-3/4 mt-5 rounded-full h-16 px-3 bg-black text-white border" : "w-full h-20 px-10"} transition-all duration-700 ease-in-out text-black left-1/2 -translate-x-1/2 fixed z-100 flex items-center justify-between backdrop-blur-2xl`}>
        <div className='text-2xl font-semibold'>
            <Link to='/'><img src="Sahayak.png" alt="" className='w-35' /></Link>
        </div>
        <ul className='items-center gap-10 text-lg font-semibold hidden md:flex'>
            <li><NavLink to='/dashboard' className={({isActive})=> isActive && 'text-blue-400'}>Dashboard</NavLink></li>
            <li><NavLink to='/about' className={({isActive})=> isActive && 'text-blue-400'}>About Us</NavLink></li>
            <li><NavLink to='/contact' className={({isActive})=> isActive && 'text-blue-400'}>Contact Us</NavLink></li>
            <li><NavLink to='/news' className={({isActive})=> isActive && 'text-blue-400'}>News</NavLink></li>
            <button>Login</button>
            <button className='bg-blue-400 text-white px-5 py-2 rounded-full'>Signup</button>
        </ul>
        <i className="ri-menu-3-line block md:hidden"></i>
    </div>
  )
}

export default Header