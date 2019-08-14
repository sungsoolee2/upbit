import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment';
import Pricetable from '../components/Spotprice/index'
import './styles/spotprice.css'
import HistoricalGraph from '../components/HistoricalGraph'
import RegressionGraph from '../components/RegressionGraph'
import API from '../utils/API';

let filterOutliers = (someArray) => {

    if(someArray.length < 4)
      return someArray;
  
    let values, q1, q3, iqr, maxValue, minValue;
  
    values = someArray.slice().sort( (a, b) => a - b);//copy array fast and sort
  
    if((values.length / 4) % 1 === 0){//find quartiles
      q1 = 1/2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
      q3 = 1/2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
    } else {
      q1 = values[Math.floor(values.length / 4 + 1)];
      q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
    }
  
    iqr = q3 - q1;
    maxValue = q3 + iqr * 1.5;
    minValue = q1 - iqr * 1.5;
  
    return values.filter((x) => (x >= minValue) && (x <= maxValue));
  }

class Spotprice extends Component {
    state = {
        icon:[],
        labels: [],
        prices: [],
        noOutliersprices: [],
        noOutlierslabels: [],
        allSpotPrices: [],
        historicalBTC: []
    }

    
    retrieveHistoricalData = () => {
        // 2016-01-01T00:00:00-06:00

        API.getHistoricalData().then(res => {
            // console.log(res.data);
        })
        .catch(err => console.log(err));
        // API.getDummyData();
    }
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
            for(let i = 0; i < data.length; i++){
                console.log("Looking...");
              
                labels.push(data[i].base);
                prices.push(parseFloat(data[i].amount));
                coins.push({label: data[i].base, price: data[i].amount});
                console.log(data[i].base);
            }
            // console.log(coins);

            // console.log(this.state.allSpotPrices);

            let filterArray = [];
            let maxValue = parseFloat(coins[0].price);
            for (const price in coins) {
                if (price > maxValue) {
                    maxValue = price;
                }
            }

            for(let i = 1; i < coins.length; i++){
                if(parseFloat(coins.price) > maxValue){
                    maxValue = parseFloat(coins.price);
                }
                else{
                    filterArray.push(coins[i]);
                }
            }
            
            this.setState({
                prices: prices,
                labels: labels,
                allSpotPrices: coins,
                noOutlierslabels: filterArray.map(({ label }) => label),
                noOutliersprices: filterArray.map(({ price }) => price)
              });
            //   console.log("prices "+this.state.noOutliersprices);
        })        
    }


    /*** RENDERING FUNCTIONS */
    componentDidMount() {
        this.retrieveSpotPrices();
        this.retrieveHistoricalData();
    }

    render (){
        return (
            // <div>
                <div className="spotpriceContent">
                    <Pricetable
                        labels= {this.state.noOutlierslabels}
                        prices= {this.state.noOutliersprices} 
                        title= {"Pricing Data for Different Crytocurrencies"} 
                    />
                </div>
                );
               
        
    }
  }

  export default Spotprice;