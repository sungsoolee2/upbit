import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';

export default class Logout extends Component {
  constructor(props) {
    super(props)
  }

  // Logout process: Remove token from localStorage
  componentDidMount = () => {
    axios.get('/api/logout')
    .then(()=>{
      localStorage.removeItem('token');
    });
  }
  
  render() {
    return (
      <Redirect to="/login" />
    )
  }
}
