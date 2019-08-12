import React from 'react'
import './footer.css'

const Logfooter = () => (
    <div className="logfooter">
    <div className="social">
        <img
          className="sclbtn"
          id="git"
          src="./assets/images/icons/git.png"
          width="30"
          height="30"
        />
        <img
          className="sclbtn"
          id="linked"
          src="./assets/images/icons/linked.png"
          width="30"
          height="30"
        />
        <img
          className="sclbtn"
          id="google"
          src="./assets/images/icons/twitter.png"
          width="30"
          height="30"
        />
        <img
        className="sclbtn"
        id="insta"
        src="./assets/images/icons/insta.png"
        width="30"
        height="30"
      />
      </div>
      <span id="copy">&copy; 2019 upBit.com, All rights reserved.</span>
  </div>
)

export default Logfooter;