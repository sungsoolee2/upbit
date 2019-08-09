import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
// import isAuthenticated from '../lib/isAuthenticated'

 const Navigation = () => (
    <div className="navBar">
    <div className="logoDiv">
    {/* <img id="navLogo" src="./assets/images/upbit.png" alt="logo" /> */}
        <Link  to="/"><img id="navLogo" src="./assets/images/upbit.png" alt="logo" /></Link>
        </div>

        <div className="homeMenu">
        
                <span id = "trade" className="homeNav">NEWS</span>
                <Link style={{ textDecoration: 'none' }} id = "market" className="homeNav" to="/pricing"><span >MARKET</span></Link>
                <span id = "security" className="homeNav">ANALYSIS</span>
                <span id = "support" className="homeNav">FAQ</span>
        </div>

        <div class="loginDiv">
              <span id = "about" class="homeAuth">ABOUT</span>
              <span>|</span>
              <Link style={{ textDecoration: 'none' }} to="/login"><span id = "login" class="homeAuth">LOGIN</span></Link>
          </div>



  </div>
)

export default Navigation;


    /* <ul style={{display: 'flex',listStyle: 'none'}}>
      <li style={{margin: '0 1em'}}><Link to="/">Home</Link></li>
      <li style={{margin: '0 1em'}}><Link to="/signup">Signup</Link></li>
      <li style={{margin: '0 1em'}}><Link to="/login">Login</Link></li>
      <li style={{margin: '0 1em'}}><Link to="/logout">Logout</Link></li>
      <li style={{margin: '0 1em'}}><Link to="/pricing">Pricing</Link></li>
    </ul> */