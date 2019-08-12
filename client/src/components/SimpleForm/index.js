import React from "react";
import './style.css'
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, marginRight: 10}} className="btn btn-primary formBtn">
      {props.children}
    </button>
  );
}

export function FormBtnUpdate(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10, marginRight: 10, paddingLeft: 30,paddingRight: 30 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
