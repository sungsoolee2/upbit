import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
// import isAuthenticated from '../lib/isAuthenticated'

 const Navigation = () => (
    <div className="navBar">
    <div className="logoDiv">
        <Link  to="/"><img id="navLogo" src="./assets/images/upbit.png" alt="logo" /></Link>
        </div>

        <div className="homeMenu">
        
                <Link style={{ textDecoration: 'none' }} id = "trade" className="homeNav" to="/news"><span >NEWS</span></Link>
                {/* <Link style={{ textDecoration: 'none' }} id = "market" className="homeNav" to="/pricing"><span >MARKET</span></Link> */}
                <Link style={{ textDecoration: 'none' }} id = "analysis" className="homeNav" to="/analysis"><span >ANALYSIS</span></Link>
                <span id = "support" className="homeNav">FAQ</span>
        </div>

        <div className="loginDiv">
                 <Link style={{ textDecoration: 'none' }} to="/login"><span id = "login" className="homeAuth">LOGIN</span></Link>
              <span>|</span>
              <Link style={{ textDecoration: 'none' }} to="/logout"><span id = "logout" className="homeAuth">LOGOUT</span></Link>
              
              <span>|</span>
              <Link style={{ textDecoration: 'none' }} to="/signup"><span id = "signup" className="homeAuth">SIGNUP</span></Link>
          </div>
    </div>
)

export default Navigation;
