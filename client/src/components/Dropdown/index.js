import React from "react";


export function Container({ fluid, children }) {
    return <div> 
        <select class="form-control" id="cryptos">
            <option>BTC</option>
            <option>BSV</option>
            <option>ETH</option>
            <option>ETC</option>
            <option>LTC</option>
            <option>ZRX</option>
            <option>USDC</option>
            <option>BAT</option>
            <option>LINK</option>
            <option>DAI</option>
            <option>ZEC</option>
            <option>XRP</option>
            <option>XLM</option>
            <option>EOS</option>
            <option>XTZ</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>CAD</option>
            <option>JPY</option>
        </select>
    </div>;
  }