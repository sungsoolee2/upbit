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
          .then(news =>
      this.setState({ news: news})
          )
           .catch(err => console.log(err));
           };
          
    render() {
      let news= this.state.news
      return (
      <div>
        <h1>Home</h1>
        <p>Todays Top News, {news}.</p>
      </div>
    );
  }
}
         
export default News;