import React, { Component } from "react";
import isAuthenticated from '../isAuthenticated';
import API from '../utils/API';
import './styles/news.css'
import Mainfooter from '../components/Footer/footer'
import moment from 'moment';
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
          <div className="newsContent">
            <div className="newsDiv">
            <div className="newsFront">
            <h3>Latest news</h3>
             <h3>on Cryptocurrency</h3>
            </div>
            <div className="newsData">
              {this.state.news.map(((data, i) => (
                <ul className="newsList" key={i}>
                  <div className="newsImg">
                <li><img src={data.link} /> </li>
                </div>

                <div className="newsText">
                <li className="newsTitle"><h5>{data.title} </h5></li>
                <li>{moment(data.datetime).format("YYYY-MM-DD HH:mm")} </li>
                <br></br>
                <li>{data.synop} </li>
                <a href={data.href} target="_blank">View Full Article</a>

                </div>
                </ul>
              )))}
            </div>
            </div>
            <Mainfooter/>
          </div>);
      }
      
  }

         
export default News;


{/* <li>Title: {data.title} </li>
                  <li>Link: {data.link} </li>
                  <li>DateTime: {data.datetime} </li>
                  <li>Synop: {data.synop} </li>
                  <li>Href: {data.href} </li> */}