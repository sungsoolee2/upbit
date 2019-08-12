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
                <Link style={{ textDecoration: 'none' }} id = "analysis" className="homeNav" to="/analysis"><span >ANALYSIS</span></Link>
                <span id = "support" className="homeNav">FAQ</span>
        </div>

        <div className="loginDiv">
              <span id = "about" className="homeAuth">ABOUT</span>
              <span>|</span>
              <Link style={{ textDecoration: 'none' }} to="/login"><span id = "login" className="homeAuth">LOGIN</span></Link>
              <span>|</span>
              <Link style={{ textDecoration: 'none' }} to="/signup"><span id = "login" className="homeAuth">SIGNUP</span></Link>
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