import React,{useRef} from 'react';
import "./style.css";
import {FaBars,FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const navRef = useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive-nav");
    }
  return (
    <div> 
        <aside className="sidebar" >
            <button className="navBtn" onClick={showNavbar}>
                <FaBars/>
            </button>
            <div className="navbarWrapper" ref= {navRef} >
                <ul>
                    <li>
                        <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span className="ml-3 text-gray-200">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-gray-200">Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-gray-200">Products</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                         <span className="flex-1 ml-3 whitespace-nowrap text-gray-200">Sign In</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-gray-200">Sign Up</span>
                        </a>
                    </li>
                </ul>
                <button className="navBtn close-nav-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
            </div>
        </aside>
        <div style ={{textAlign: 'center'}}>
            <h2>Sidebar Page</h2>
        </div>
    </div>
  )
}

export default Sidebar
