import React, { Component } from 'react'
import '../styles/materialize.min.css'
import '../components/Landing/landing.css'
import Footer from '../components/Landing/homefoot.js'
import API from '../utils/API';

export default class Home extends Component {

    state = { user: {} }
  
  componentDidMount() {
    console.log(`component did mount userinfo`)
    this.getUser();
  }
    getUser = () => {
      API.getUser()
        .then(res => {
          return res.json()
        }).then(user => {
          this.setState({ user: user })
        }).catch(err => {
          console.log(err)
        })
    }
  

    render() {
      let username = this.state.user.username
      return (
        <div>
          <h1>Home</h1>
          <p>Welcome to Up-Bit, {username}.</p>
        </div>
      )
    }
  }

