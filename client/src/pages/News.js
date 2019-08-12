import React, { Component } from "react";
import isAuthenticated from '../isAuthenticated';
import API from '../utils/API';

console.log("Hit News Page!");

class News extends Component {

    state = {news: []}
 
    componentDidMount() {
        console.log(`component did mount news`)
        this.loadNews();
    }

        loadNews= () =>{
          API.getNews()
          .then(res => {
            console.log(res.data);
      this.setState({ news: res.data});
      console.log(this.state);
          })
           .catch(err => console.log(err));
           };
          
    
        render() {
          return (
          <div>
          {this.state.news.map((data => (
            <ul>
              <li>Title: {data.title} </li>
              <li>Link: {data.link} </li>
              <li>DateTime: {data.datetime} </li>
              <li>Synop: {data.synop} </li>
              <li>Href: {data.href} </li>
            </ul>
          )))}
          </div>);
      }
      
  }

         
export default News;