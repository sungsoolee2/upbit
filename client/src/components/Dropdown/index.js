import React from "react";


export default function Dropdown(props) {
    let list = props.list;
    return <div> 
        <select className="form-control" id="cryptos">

        {list.map((item, i) => (
            <option key={i} onClick={() => props.handleClicked(item)}>{item}</option>
        ))}
        </select>
    </div>;
  }