import React, { Component } from "react";
import isAuthenticated from '../isAuthenticated';
import './styles/homenews.css'
import API from '../utils/API';

console.log("Hit News Page!");

class HomeNews extends Component {

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
          {this.state.news.map(((data,i) => (
            <ul className="homenewsList" key={i}>
            
                <div className="homenewsImg">
                <li><img src={data.link} /> </li>
                </div>

                <div className="homenewsText">
                <li className="homenewsTitle"><h5>{data.title} </h5></li>
                <li>{data.datetime} </li>
                <br></br>
                <li>{data.synop} </li>
                </div>
            </ul>
          )))}
       
          </div>);
      }
      
  }

         
export default HomeNews;