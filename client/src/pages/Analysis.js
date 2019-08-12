import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import PricingGraph from "../components/PricingGraph";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn, FormBtnUpdate } from "../components/SimpleForm";
import API from "../utils/API";
import "../components/PricingGraph/market.css";

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
    ticker: "",
    prices: [],
    labels: []
  };

  /*** RENDERING FUNCTIONS */
  componentDidMount() {}

  getHistoricalData = () => {

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
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

        console.log(res.data);
      });

      
    }
  };

  render() {
    return (
      <Container>
          <div className="pricingContent">
        <Row>
          {/* <Col size="md-6"> */}

          <div>
              
         
          <PricingGraph labels={["red", "yellow", "blue"]} prices={[1, 2, 3]} />
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
      </Container>
    );
  }
}

export default Pricing;
