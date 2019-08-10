import React, { Component } from 'react'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { user: {} }
  }

  componentDidMount() {
    console.log(`component did mount1`)
    fetch('/api/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      console.log(`fetch completed`)
      console.log(res)
      return res.json()
    }).then(user => {
      console.log(`2nd promise`)
      this.setState({user: user})
    }).catch( err => {
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
