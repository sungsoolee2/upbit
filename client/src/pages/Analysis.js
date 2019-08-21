import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
/** GRAPHS */
import PricingGraph from "../components/PricingGraph";
import HistoricalGraph from "../components/HistoricalGraph";
import RegressionGraph from "../components/RegressionGraph";
import SenseLineGraph from "../components/SenseLineGraph";
////// COMPONENTS
import "./styles/analysis.css";
import {
  Input,
  FormBtn,
  FormBtnUpdate,
  DropdownC
} from "../components/SimpleForm";
import Dropdown from "../components/Dropdown";
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
const GRAPHS = [
  "Historical Price & Volume",
  "Regression",
  "Omenics Sentiment",
  "Vader Sentiment"
];

// let historicalData = () => {
class Analysis extends Component {
  state = {
    ticker: "",
    tickerDropdown: "",
    // prices is the
    prices: [],
    labels: [],
    datasets: [], //in the meantime, have this as a 2d array that holds all the possible datasets, such as prices, sense data, etc.
    fromDate: "",
    toDate: "",
    title: "BTC",
    senseOmnData: [],
    senseData: {},
    graphState: GRAPHS[0],
    coinbase_prices: [],
    coinbase_labels: [],
    noOutlierslabels: [],
    noOutliersprices: []
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

  retrieveSpotPrices = () => {
    // axios.get(`https://api.coinbase.com/v2/prices/USD/spot`)
    console.log("hey");
    API.getAllCoinData().then(res => {
      console.log("Data here ", res.data.data);
      let data = res.data.data;
      let icon = {};
      let coinbase_labels = [];
      let coinbase_prices = [];
      let coins = [];
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log("Looking...");
        coinbase_labels.push(data[i].base);
        coinbase_prices.push(parseFloat(data[i].amount));
        coins.push({ coinbase_labels: data[i].base, coinbase_prices: data[i].amount });
        console.log(data[i].base);
      }
      // console.log(coins);

      // console.log(this.state.allSpotPrices);

      let filterArray = [];
      let maxValue = parseFloat(coins[0].coinbase_prices);
      let maxCoin = coins[0];
      for (const coinbase_prices in coins) {
        if (coinbase_prices > maxValue) {
          maxValue = coinbase_prices;
        }
      }

      for (let i = 1; i < coins.length; i++) {
        if (parseFloat(coins[i].coinbase_prices) > maxValue) {
          maxValue = parseFloat(coins[i].coinbase_prices);
          filterArray.push(coins[maxCoin]);
        } else if (
          coins[i].label !== "JPY" &&
          coins[i].label !== "GBP" &&
          coins[i].label !== "CAD" &&
          coins[i].label !== "EUR"
        ) {
          filterArray.push(coins[i]);
        }
      }
      // let result = coins.map(({ label }) => label) //this works
      // console.log("Labels: "+result);
      //   let filtered = prices.filter(function (str) { return str.includes(PATTERN); });

      this.setState({
        coinbase_prices: coinbase_prices,
        coinbase_labels: coinbase_labels,
        noOutlierslabels: filterArray.map(({ coinbase_labels }) => coinbase_labels),
        noOutliersprices: filterArray.map(({ coinbase_prices }) => coinbase_prices)
      });
      //   console.log("prices "+this.state.noOutliersprices);
    });
  };

  handleInputChange = event => {
    let { name, value } = event.target;
    if (name === "fromDate" || name === "toDate") {
      console.log("CHANGING");
      console.log(value);
    }
    if (value !== "List of Cryptocurrencies") {
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

        API.parseDataSense(res).then(res => {
          let data = res.data;
          this.setState({
            fundamental: data.fundamental,
            overall_score: data.overall_score,
            technical: data.technical,
            news_sentiment: data.news_sentiment,
            twitter_sentiment: data.twitter_sentiment,
            reddit_sentiment: data.reddit_sentiment,
            buzz: data.buzz,
            labels: data.time,
            ticker: item,
            title: this.state.ticker
          });
        });
      });
    }
  };

  typeOfGraph = () => {
    // console.log("Graph state is "+this.state.graphState);
    if (this.state.graphState === GRAPHS[0]) {
      return (
        <HistoricalGraph
          labels={this.state.labels}
          prices={this.state.prices}
          volume={this.state.volume}
          title={this.state.title}
        />
      );
    } else if (this.state.graphState === GRAPHS[1]) {
      return (
        <RegressionGraph
          labels={this.state.labels}
          prices={this.state.prices}
          title={this.state.title}
        />
      );
    } else if (this.state.graphState === GRAPHS[2]) {
      return (
        <SenseLineGraph
          labels={this.state.labels}
          title={this.state.title}
          senseData={this.state.senseData}
        />
      );
    } else {
      return (
        <SenseLineGraph
          labels={this.state.labels}
          senseData={this.state.senseData}
          title={this.state.title}
        />
      );
    }
  };

  // HANDLES HOW THE SUBMIT BUTTON WORKS FOR
  handleFormSubmit = event => {
    event.preventDefault();
    let fromDate = this.state.fromDate;
    let toDate = this.state.toDate;
    let ticker = this.state.ticker;
    // console.log(fromDate, toDate, ticker);
    let query = "";

    this.setState({
      title: ticker
    });

    if (ticker) {
      /*
       *API get the historical data for the specific ticker
       */
      query += ticker;
      let str = "/";

      if (fromDate) {
        console.log(fromDate);
        query += "/" + fromDate.replace(/\//g, "-");
        // console.log("FROM DATE", fromDate.replace(/\//g,"-"));
        if (toDate) {
          query += "/" + toDate.replace(/\//g, "-");
        }

        API.getExactDateHist(query).then(res => {
          console.log(res);
          API.parseDataTPV(res).then(res => {
            let data = res.data;
            this.setState({
              prices: data.prices,
              volume: data.volume,
              labels: data.time,
              senseData: data
            });
          });
        });
      } else if (toDate) {
        query += "/" + toDate;
        API.getExactDateHist(query).then(res => {
          console.log(res);
          API.parseDataTPV(res).then(res => {
            let data = res.data;
            this.setState({
              prices: data.prices,
              volume: data.volume,
              labels: data.time,
              senseData: data
            });
          });

        });
      } else {
        // console.log(ticker);
        API.getHistData(ticker).then(res => {
          console.log(res);
          API.parseDataTPV(res).then(res => {
            let data = res.data;
            console.log(res.data.fundamental);
            this.setState({
              prices: data.prices,
              volume: data.volume,
              labels: data.time,
              senseData: data
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
        {/* THIS CHANGES THE GRAPH SHOWN */}
        {this.typeOfGraph()}

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
              "XTZ"
            ]}
            onChange={this.handleInputChange}
            name="ticker"
          />
           <Dropdown list={GRAPHS}
            onChange={this.handleInputChange}
            name="graphState"
            className="graphType"
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
                placeholder="From Date"
              />
              <Input
                value={this.state.toDate}
                onChange={this.handleInputChange}
                name="toDate"
                placeholder="To Date"
              />
              <FormBtn
                disabled={!this.state.ticker}
                onClick={this.handleFormSubmit}
              >
                SUBMIT
              </FormBtn>
            </form>
        </div>
      </div>
    );
  }
}
export default Analysis;
