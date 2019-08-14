import React, { Component } from "react";
import isAuthenticated from '../isAuthenticated';
import './styles/homenews.css'
import API from '../utils/API';
import moment from 'moment';
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
                <li>{moment(data.datetime).format("YYYY-MM-DD HH:mm")} </li>
                <br></br>
                <li>{data.synop} </li>
                <a href={data.href} target="_blank">View Full Article</a>

                </div>
            </ul>
          )))}
       
          </div>);
      }
      
  }

         
export default HomeNews;