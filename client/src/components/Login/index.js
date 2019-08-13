import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../../isAuthenticated'
import '../../styles/materialize.min.css'
import Logfooter from './footer.js'
import './login.scss'

export default class Login extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      loggedin: isAuthenticated()
    }
  }

  submit(e) {
    e.preventDefault()
    e.stopPropagation()
    
    let form = e.target
    let formData = new FormData(form)
    let params = new URLSearchParams(formData)

    
    // Send request to the server
    fetch('/api/login', {
      method: 'POST',
      body: params
    }).then( (res) => {
      return res.json()
    }).then(data => {
      localStorage.setItem('token', data.token)
      this.setState({loggedin: true})

      console.log(data.token)
      
    }).catch( (err) => {
      console.error(err)
    })
  }

  render() {
    if ( this.state.loggedin ) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      )
    } else {
      return (
        <div className="loginWrap">
          <div className="loginContent">
            <div className="loginpageDiv">
            <h4>Login to your upBit account</h4>
            <form className="formFillup" onSubmit={this.submit.bind(this)}>
            <div className="input-field fillinfo">
              <i className="material-icons prefix">account_circle</i>
              <input type="text" name="username" pattern=".{2,16}" placeholder="Email" required />
            </div>
            <div className="input-field fillinfo">
            <i className="material-icons prefix">fingerprint</i>
              <input type="password" name="password" pattern=".{6,20}" placeholder="Password" required />
            </div>
            <div className="loginOpt">
                        <label className="opt">
                            <input id="indeterminate-checkbox" type="checkbox" />
                            <span>Remember me</span>
                          </label>
                      <span className="opt">Forgot Password?</span>
                     
                  </div>
            <div className="btnDiv">
            <button className="btn waves-effect waves-light #fbc02d yellow darken-2" type="submit" name="action">Log in</button>
              {/* <input type="submit" value="Log in" /> */}
            </div>
          </form>
            </div>
          </div>
          <Logfooter />  
        </div>
      )
    }
  }
}
