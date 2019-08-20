import React from "react";
import "./style.css";
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group form-input">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10, marginRight: 10 }}
      className="btn btn-primary formBtn yellow darken-2"
    >
      {props.children}
    </button>
  );
}

export function FormBtnUpdate(props) {
  return (
    <button
      {...props}
      style={{
        float: "left",
        marginBottom: 10,
        marginRight: 10,
        paddingLeft: 30,
        paddingRight: 30
      }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}

export function DropdownC(props) {
  let list = props.list;
  let v = props.value;

  if (v) {
    return (
      <div>
        <select
          className="form-control yellow darken-2"
          onChange={props.onChange}
          name={props.name}
        >
          {list.map((item, i) => (
            <option key={i} value={i}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div>
        <select
          className="form-control yellow darken-2"
          onChange={props.onChange}
          name={props.name}
        >
          {list.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export function Checkbox(props) {

  return(
    <input type="checkbox" {...props} />
  )
}
