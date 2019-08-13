import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
/** GRAPHS */
import PricingGraph from "../components/PricingGraph";
import HistoricalGraph from "../components/HistoricalGraph";
import RegressionGraph from "../components/RegressionGraph";
////// COMPONENTS
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn, FormBtnUpdate, Dropdown } from "../components/SimpleForm";
// import Dropdown from '../components/Dropdown';
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
class Analysis extends Component {
  state = {
    ticker: "",
    tickerDropdown: "",
    prices: [],
    labels: [],
    datasets: []
  };
  /*** RENDERING FUNCTIONS */
  componentDidMount() {
    API.getHistData("BTC").then(res => {
      console.log(res);
      API.parseDataTPV(res).then(res => {
        let data = res.data;
        this.setState({
          prices: data.prices,
          volume: data.volume,
          labels: data.time
        });
      });
    });
  }
  getHistoricalData = () => {};

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target.value);
    this.setState({
      [name]: value.trim()
    });
  };

  handleClicked = item => {
    
    if(item != ""){
      API.getHistData(item).then(res => {
        console.log(res);
        API.parseDataTPV(res).then(res => {
          let data = res.data;
          this.setState({
            prices: data.prices,
            volume: data.volume,
            labels: data.time,
            ticker: item
          });
        });
      });
    }

  }
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
            title={this.state.ticker}
          />
          <Row>
            <div>
              <Dropdown 
              list={["", "BTC", "ETH", "ETC", "LTC", "ZRX", "USDC", "BAT", "LINK", "DAI", "ZEC", "XRP", "XLM", "EOS", "XTZ", "EUR", "GBP", "CAD", "JPY"]}
              onChange={this.handleInputChange}
              name="ticker"
              
              />
              <form>
                <Input
                  value={this.state.ticker}
                  onChange={this.handleInputChange}
                  name="ticker"
                  placeholder="Ticker (example: BTC)"
                />
                <Input
                  value={this.state.ticker}
                  onChange={this.handleInputChange}
                  name="fromDate"
                  placeholder="From Date"
                />
                                <Input
                  value={this.state.ticker}
                  onChange={this.handleInputChange}
                  name="toDate"
                  placeholder="To Page"
                />
                <FormBtn
                  disabled={!this.state.ticker}
                  onClick={this.handleFormSubmit}
                >
                  SUBMIT
                </FormBtn>
              </form>
              <form>
                <FormBtnUpdate onClick={this.handleFormSubmit}>
                  UPDATE
                </FormBtnUpdate>
              </form>
            </div>
          </Row>
        </Row>
      </div>
    );
  }
}
export default Analysis;