import React from "react";


export default function Dropdown(props) {
    let list = props.list;
    
    return <div> 
        <select className="dropdown-trigger btn #90a4ae blue-grey lighten-2" onChange={props.onChange} name={props.name}>
  
        {list.map((item, i) => (
            <option key={i} value={item}>{item}</option>     
        ))}
        </select>
    </div>;
  }