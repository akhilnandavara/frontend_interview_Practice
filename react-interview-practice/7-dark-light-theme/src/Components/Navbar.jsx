import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme-context";

export default function Navbar() {
    const {theme, toggleTheme} =useTheme()
    
  return <nav>
    <ul className="navbar">
      
        <Link to="/">Home</Link>
      
        <Link to="/About">About</Link>
        <input  type="checkbox" className="theme-btn"  onClick={()=>toggleTheme()}  />
      
    </ul>
        
  </nav>;
}
