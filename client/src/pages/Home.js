import React, { Component } from 'react'
// import '../styles/materialize.min.css'
import './styles/home.css'
import API from '../utils/API';
import Description from '../components/Home/description'
import Highlights from '../components/Home/highlights'
import Mainfooter from '../components/Footer/footer'
import Spotprice from './Spotprice'
import HomeNews  from './Homenews';

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
        <div className="homeContent">
          <div className="greetDiv">
            <div className="greetSpan">
            <h1>Welcome to upBit</h1>
            <h4>Stay on top of the market and grow your Investments.</h4>
            <br></br>
            <div className="greetNav">
            <a id="reg" href="/" ><h5 className="greetOpt">Register now</h5></a>
            <h5>or</h5>
            <a href="/" ><h5 className="greetOpt">Login as user</h5></a>
            <br></br>
            <span>By signing up, you agree to our terms of service & privacy policy.</span>
            </div>
            </div>
          </div>
          <div className="snippet">
          <div className="news">
            <h4 className="homenewsGreet">Sign in to get real-time cryptocurrency news</h4>
            <HomeNews/>
          </div>
          <Spotprice/>
          </div>
        <Description/>
        <Highlights/>
        <Mainfooter/>
        </div>
      )
    }
  }

