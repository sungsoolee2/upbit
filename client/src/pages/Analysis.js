import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

/** GRAPHS */
import PricingGraph from "../components/PricingGraph";
import HistoricalGraph from '../components/HistoricalGraph'
import RegressionGraph from '../components/RegressionGraph'

////// COMPONENTS
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn, FormBtnUpdate } from "../components/SimpleForm";
import "../components/PricingGraph/market.css";

//// API
import API from "../utils/API";


/**
 * Axios call to retrieve data
 * Nested axios call, maybe coinbase updates their api to add currencies so we
 * Retrieve it from the initial spot prices
 *
 *
 */
// let historicalData = () => {

class Pricing extends Component {
  state = {
    ticker: "BTC",
    prices: [],
    labels: [],
    datasets: []
  };

  /*** RENDERING FUNCTIONS */
  componentDidMount() {
    API.getHistData("BTC").then(res => {

      console.log(res);
      API.parseDataTPV(res).then(res =>{
        let data = res.data;

        this.setState({
          prices: data.prices,
          volume: data.volume,
          labels: data.time
        })

      });
    });
  }

  getHistoricalData = () => {

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.trim()
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.ticker) {

        /*
        *API get the historical data for the specific ticker 
        */
      console.log(this.state.ticker);
      API.getHistData(this.state.ticker).then(res => {

        console.log(res);
      });

      
    }
  };

  render() {
    return (
      // <Container>
        <div className="pricingContent">               
         <Row>
          <HistoricalGraph 
          labels={this.state.labels} 
          prices={this.state.prices}
          volume={this.state.volume} 
          title={this.state.ticker}/>
          </Row>
          <Row>
          <div>
            
          <form className="float-right">
            <Input
              value={this.state.ticker}
              onChange={this.handleInputChange}
              name="ticker"
              placeholder="Ticker (example: BTC)"
            />
            <FormBtn
              disabled={!this.state.ticker}
              onClick={this.handleFormSubmit}
            >
              SUBMIT
            </FormBtn>
          </form>
          <form>
            <FormBtnUpdate
              onClick={this.handleFormSubmit}
            >
              UPDATE
            </FormBtnUpdate>
          </form>
          </div>
          </Row>
          </div>
    );
  }
}

export default Pricing;
