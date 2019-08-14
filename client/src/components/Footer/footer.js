import React from 'react'
import './styles/mainfooter.css'

const Mainfooter = () => (
    <div className="footer">
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
      <span>&copy 2019 Advance Investments, All rights reserved.</span>
  </div>
)

export default Mainfooter;