import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import PricingGraph from "../components/PricingGraph";
import { Container, Row, Col } from "../components/Grid";
import "./styles/pricing.css";
// import '../components/PricingGraph/style.css'
import HistoricalGraph from "../components/HistoricalGraph";
import RegressionGraph from "../components/RegressionGraph";
import API from "../utils/API";
import {
  Input,
  FormBtn,
  FormBtnUpdate,
  DropdownC
} from "../components/SimpleForm";
import Dropdown from '../components/Dropdown'

/**
 * Axios call to retrieve data
 * Nested axios call, maybe coinbase updates their api to add currencies so we
 * Retrieve it from the initial spot prices
 *
 *
 */
// let historicalData = () => {

// }

const GRAPHS = ["Unfiltered", "Filtered"];

class NewsPricing extends Component {
  state = {
    icon: [],
    labels: [],
    prices: [],
    noOutliersprices: [],
    noOutlierslabels: [],
    allSpotPrices: [],
    historicalBTC: [],
    graphState: GRAPHS[0]
  };

  retrieveSpotPrices = () => {
    // axios.get(`https://api.coinbase.com/v2/prices/USD/spot`)
    console.log("hey");
    API.getAllCoinData().then(res => {
      console.log("Data here ", res.data.data);
      let data = res.data.data;
      let icon = {};
      let labels = [];
      let prices = [];
      let coins = [];
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log("Looking...");
        labels.push(data[i].base);
        prices.push(parseFloat(data[i].amount));
        coins.push({ label: data[i].base, price: data[i].amount });
        console.log(data[i].base);
      }
      // console.log(coins);

      // console.log(this.state.allSpotPrices);

      let filterArray = [];
      let maxValue = parseFloat(coins[0].price);
      let maxCoin = coins[0];
      for (const price in coins) {
        if (price > maxValue) {
          maxValue = price;
        }
      }

      for (let i = 1; i < coins.length; i++) {
        if (parseFloat(coins[i].price) > maxValue) {
          maxValue = parseFloat(coins[i].price);
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
        prices: prices,
        labels: labels,
        allSpotPrices: coins,
        noOutlierslabels: filterArray.map(({ label }) => label),
        noOutliersprices: filterArray.map(({ price }) => price)
      });
      //   console.log("prices "+this.state.noOutliersprices);
    });
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

  typeOfGraph = () => {
    if (this.state.graphState === GRAPHS[0]) {
      return (
        <PricingGraph
          labels={this.state.labels}
          prices={this.state.prices}
          title={"Unfiltered Pricing Data"}
        />
      );
    } else {
      return (
        <PricingGraph
          labels={this.state.noOutlierslabels}
          prices={this.state.noOutliersprices}
          title={"Pricing Data for Different Crytocurrencies"}
        />
      );
    }
  };

  /*** RENDERING FUNCTIONS ***************************************************************/
  componentDidMount() {
    this.retrieveSpotPrices();
  }

  render() {
    return (
 
      <div className="pricingContent">
        {this.typeOfGraph()}

      </div>
    );
  }
}

export default NewsPricing;
