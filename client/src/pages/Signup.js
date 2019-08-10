import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../isAuthenticated'
import '../components/Signup/signup.css'
import Footer from '../components/Signup/footer.js'
import '../styles/materialize.min.css'

export default class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loggedin: isAuthenticated()
    }
  }

  submit(event) {
    event.preventDefault()
    event.stopPropagation()

    let form = event.target
    let formData = new FormData(form)
    let params = new URLSearchParams(formData)

    
    // Send request to the server
    fetch('/api/signup', {
      method: 'POST',
      body: params
    //}).then( (res) => {
     // return res.json()
    }).then(data => {
      localStorage.setItem('token', data.token)
      this.setState({loggedin: true})
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
        <div className="signupWrap">
        <div className="signupContent">
          <div className="signupDiv">
          <h4>Create new upBit account</h4>
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
                        <label>
                            <input id="indeterminate-checkbox" type="checkbox" />
                            <span>Remember me</span>
                          </label>
                      <span>Forgot Password?</span>
                     
                  </div>
            <div className="btnDiv">
            <button className="btn waves-effect waves-light #ffab00 amber accent-4" type="submit" name="action">Register</button>
              {/* <input type="submit" value="Sign up" /> */}
            </div>
          </form>
          </div>
        </div>
        <Footer />
        </div>
        
       
      )
    }
  }
};
