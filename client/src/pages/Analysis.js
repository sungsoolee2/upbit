import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
/** GRAPHS */
import PricingGraph from "../components/PricingGraph";
import HistoricalGraph from "../components/HistoricalGraph";
import RegressionGraph from "../components/RegressionGraph";

////// COMPONENTS
import "./styles/analysis.css";
import {
  Input,
  FormBtn,
  FormBtnUpdate,
  DropdownC
} from "../components/SimpleForm";
import Dropdown from '../components/Dropdown'
// import Dropdown from '../components/Dropdown';

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
    datasets: [],
    fromDate: "",
    toDate: "",
    title: "BTC"
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
  getHistoricalData = () => {
    
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target.value);
    if(value !== "List of Cryptocurrencies")
    {
      this.setState({
        [name]: value.trim()
      });
      console.log(this.state.fromDate);
    }

  };

  handleClicked = item => {
    if (item != "") {
      API.getHistData(item).then(res => {
        console.log(res);
        API.parseDataTPV(res).then(res => {
          let data = res.data;
          this.setState({
            prices: data.prices,
            volume: data.volume,
            labels: data.time,
            ticker: item,
            title: this.state.ticker
          });
        });
      });
    }
  };
  handleFormSubmit = event => {
    event.preventDefault();
    let fromDate = this.state.fromDate;
    let toDate = this.state.toDate;
    let ticker = this.state.ticker;
    // console.log(fromDate, toDate, ticker);
    let query = "";

    this.setState({
      title: ticker
    })

    if (ticker) {
      /*
       *API get the historical data for the specific ticker
       */
      query+= ticker;
      if (fromDate) {
        console.log(fromDate);
        query += "/"+fromDate;
        if(toDate){
          query += "/"+toDate;
        }

        API.getExactDateHist(query).then(res => {
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
      else if (toDate){
        query += "/"+toDate;
        API.getExactDateHist(query).then(res => {
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
      else{
        // console.log(ticker);
        API.getHistData(ticker).then(res => {
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
    }
  };
  render() {
    return (
      // <Container>
      <div className="analysisContent">
        
        <HistoricalGraph
          labels={this.state.labels}
          prices={this.state.prices}
          volume={this.state.volume}
          title={this.state.title}
        />

        <div className="searchOptions">
        <Dropdown
            list={[
              "List of Cryptocurrencies",
              "BTC",
              "ETH",
              "ETC",
              "LTC",
              "ZRX",
              "USDC",
              "BAT",
              "LINK",
              "DAI",
              "ZEC",
              "XRP",
              "XLM",
              "EOS",
              "XTZ",
              "EUR",
              "GBP",
              "CAD",
              "JPY"
            ]}
            onChange={this.handleInputChange}
            name="ticker"
          />
          <form>
            <Input
              value={this.state.ticker.toUpperCase()}
              onChange={this.handleInputChange}
              name="ticker"
              placeholder="Ticker (example: BTC)"
            />
            <Input
              value={this.state.fromDate}
              onChange={this.handleInputChange}
              name="fromDate"
              placeholder="From Date (YYYY-MM-DD)"
            />
            <Input
              value={this.state.toDate}
              onChange={this.handleInputChange}
              name="toDate"
              placeholder="To Date (YYYY-MM-DD)"
            />
            <FormBtn
              disabled={!this.state.ticker}
              onClick={this.handleFormSubmit}
            >
              SUBMIT
            </FormBtn>
          </form>
          <form>
            {/* <FormBtnUpdate onClick={this.handleFormSubmit}>
              UPDATE
            </FormBtnUpdate> */}

          </form>
        </div>
        
      </div>
    );
  }
}
export default Analysis;
