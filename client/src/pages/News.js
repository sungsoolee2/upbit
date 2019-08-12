import React, { Component } from "react";
import isAuthenticated from '../isAuthenticated';
import API from '../utils/API';

console.log("Hit News Page!");

class News extends Component {
 
    state = {news: [] }
 
    componentDidMount() {
        console.log(`component did mount news`)
        this.loadNews();
    }

        loadNews= () =>{
          API.getNews()
          .then(res =>
      this.setState({ news: res.data})
          )
           .catch(err => console.log(err));
           };
          
    render() {
      let article= this.state.news
      return (
      <div>
        <h1>Home</h1>
        <p>Todays Top News, {article}.</p>
      </div>
    );
  }
}
         
export default News;