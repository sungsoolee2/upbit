import React from 'react'
import './styles/highlights.css'

const Highlights = () => (
    <div className="highlights">
          <div className="info trading">
            <img className="infoimg" src="./assets/images/icons/tradeicon.png"/>
            <h4 className="infohead">RESEARCH</h4>
            <span className="textinfo" id="tradeinfo">Execute on the fastest commercially available platform.</span>
          </div>
          <div className="info infra">
            <img className="infoimg" src="./assets/images/icons/tradeicon.png"/>
            <h4 className="infohead">TECHNOLOGY</h4>
            <span className="textinfo" id="infrainfo">
            Trade on a global network built for speed, accessibility and security.
            </span>
          </div>
          <div className="info data">
            <img className="infoimg" src="./assets/images/icons/tradeicon.png"/>
            <h4 className="infohead">STATS</h4>
            <span className="textinfo" id="statsinfo">
            Access your complete transaction history to inform future trading.
            </span>
          </div>
        </div>
)

export default Highlights;