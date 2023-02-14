import React,{useRef} from 'react';
import "./navStyle.css";
import {FaBars,FaTimes } from "react-icons/fa";

const Navbar = () => {
    const navRef = useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive-nav");
        console.log(navRef)
    }
  return (
    <header>
      <div className="left">
        <span>Logo</span>
        <span>Some message here</span>
      </div>
     <nav ref= {navRef}>
        <div className="center">
            <div className="centerInnerWrapper">
                <input type="text" placeholder="Search Product.." />
                <button>Search</button>
            </div>
        </div>
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="service">Service</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
        <button className='nav-btn nav-close-btn'
         onClick={showNavbar}
        >
            <FaTimes/>
        </button>
     </nav>
     <button  
     className="nav-btn" 
     onClick={showNavbar}>
        <FaBars/>
     </button>
    </header>
  )
}

export default Navbar